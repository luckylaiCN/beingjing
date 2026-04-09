import { registry } from "@/lib/ai"
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  stepCountIs,
} from "ai"
import { z } from "zod"
import Attractions from "@/app/api/attractions/attractions.json"
import {
  Attraction,
  AttractionCategory,
  AttractionTag,
  filterAttractions,
  sortAttractionsByDistance,
} from "../attractions/prototype"

const reverseGeocodeTool = tool({
  description: `return the address of a location given its latitude and longitude. 
    If searchNear is true, also return nearby points of interest. 
    Use searchNear=false if user just wants to know the address of the location. 
    Please do not talk about detailed lng and lat in the response. User only cares about the address and nearby points of interest.
    `,
  inputSchema: z.object({
    latitude: z.number(),
    longitude: z.number(),
    searchNear: z.boolean().optional(),
  }),
  execute: async ({ latitude, longitude, searchNear = false }) => {
    console.log(
      `Reverse geocode tool called with latitude: ${latitude}, longitude: ${longitude}, searchNear: ${searchNear}`
    )
    const base_url = "https://restapi.amap.com/v3/geocode/regeo?parameters"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      location: `${longitude},${latitude}`,
      extensions: searchNear ? "all" : "base",
    })
    const url = `${base_url}&${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.status === "1") {
        const address = data.regeocode
        console.log("Reverse geocoding successful. Address:", address)
        return address
      } else {
        console.error("Reverse geocoding failed. Response:", data)
        return "Unknown location"
      }
    } catch (error) {
      console.error("Error during reverse geocoding:", error)
      return "Unknown location"
    }
  },
})

const getAttractions = tool({
  description: `
You should use this tool only when user wants to find attractions or ask for recommendations based on a location.
If user just wants to know the things around a location, you should use the reverseGeocode tool with searchNear=true instead of this tool.
return a list of recommended locations based on given location coordinates.
searchWord is an optional keyword that can be used to filter the recommended locations. It is not a blur keyword search. The tool will only return locations whose name, description or address contains the searchWord.
searchCategory is an optional category that can be used to filter the recommended locations. The tool will only return locations that belong to the searchCategory.
searchTags is an optional list of tags that can be used to filter the recommended locations. The tool will only return locations that have all the searchTags.

The result will be sorted by distance from the user's current location, with the closest locations appearing first. 
If there are more than 5 recommended locations, only return the 5 closest ones.
`,
  inputSchema: z.object({
    latitude: z.number(),
    longitude: z.number(),
    searchWord: z.string().optional(),
    searchTags: z.array(z.string() as z.ZodType<AttractionTag>).optional(),
    searchCategory: (z.string() as z.ZodType<AttractionCategory>).optional(),
  }),
  execute: async ({
    latitude,
    longitude,
    searchWord,
    searchTags,
    searchCategory,
  }: {
    latitude: number
    longitude: number
    searchWord?: string
    searchTags?: AttractionTag[]
    searchCategory?: AttractionCategory
  }) => {
    console.log(
      `Get attractions tool called with latitude: ${latitude}, longitude: ${longitude}, searchWord: ${searchWord}, searchTags: ${searchTags}, searchCategory: ${searchCategory}`
    )
    return sortAttractionsByDistance(
      filterAttractions(
        Attractions as Attraction[],
        searchCategory,
        searchTags,
        searchWord
      ),
      longitude,
      latitude
    ).slice(0, 5)
  },
})

const searchPoI = tool({
  description:
    "Search for points of interest based on a keyword. return a list of POIs that match the keyword. ",
  inputSchema: z.object({
    keyword: z.string(),
  }),
  execute: async ({ keyword }) => {
    console.log(`Search POI tool called with keyword: ${keyword}`)
    const base_url = "https://restapi.amap.com/v3/place/text?parameters"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      keywords: keyword,
      city: "北京",
      citylimit: "true",
      offset: "10",
      extensions: "all",
    })
    const url = `${base_url}&${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.status === "1") {
        console.log("POI search successful. Results:", data.pois)
        return data.pois
      } else {
        console.error("POI search failed. Response:", data)
        return []
      }
    } catch (error) {
      console.error("Error during POI search:", error)
      return []
    }
  },
})

const searchAround = tool({
  description: `Search for points of interest around a location within a specified radius. 
    Returns a list of POIs sorted by distance or relevance.
    keywords: optional keyword to filter POIs
    radius: search radius in meters (0-50000)
    sortrule: distance (sort by distance) or weight (comprehensive sorting)
    `,
  inputSchema: z.object({
    longitude: z.number(),
    latitude: z.number(),
    keywords: z.string().optional(),
    radius: z.number().optional(),
    sortrule: z.enum(["distance", "weight"]).optional(),
    pageSize: z.number().optional(),
    pageNum: z.number().optional(),
  }),
  execute: async ({
    longitude,
    latitude,
    keywords,
    radius = 5000,
    sortrule = "distance",
    pageSize = 10,
    pageNum = 1,
  }) => {
    console.log(
      `Search around tool called with location: (${longitude},${latitude}), keywords: ${keywords}, radius: ${radius}`
    )
    const base_url = "https://restapi.amap.com/v5/place/around?parameters"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      location: `${longitude},${latitude}`,
      radius: radius.toString(),
      sortrule: sortrule,
      page_size: pageSize.toString(),
      page_num: pageNum.toString(),
    })
    if (keywords) {
      params.append("keywords", keywords)
    }
    const url = `${base_url}&${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.code === "10000") {
        console.log("Search around successful. Results:", data.pois)
        return data.pois
      } else {
        console.error("Search around failed. Response:", data)
        return []
      }
    } catch (error) {
      console.error("Error during search around:", error)
      return []
    }
  },
})

const transitRoute = tool({
  description: `Plan a public transit route between two locations using various transportation methods (bus, train, subway). 
    Returns transit route options with directions and transfer information.
    strategy: 0=fastest, 1=cheapest, 2=least transfers, 3=least walking, 5=no subway
    `,
  inputSchema: z.object({
    originLng: z.number(),
    originLat: z.number(),
    destinationLng: z.number(),
    destinationLat: z.number(),
    strategy: z.number().optional(),
    nightflag: z.number().optional(),
    extensions: z.enum(["base", "all"]).optional(),
  }),
  execute: async ({
    originLng,
    originLat,
    destinationLng,
    destinationLat,
    strategy = 0,
    nightflag = 0,
    extensions = "base",
  }) => {
    console.log(
      `Transit route tool called from (${originLng},${originLat}) to (${destinationLng},${destinationLat})`
    )
    const base_url =
      "https://restapi.amap.com/v3/direction/transit/integrated?parameters"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      origin: `${originLng},${originLat}`,
      destination: `${destinationLng},${destinationLat}`,
      city: "北京",
      strategy: strategy.toString(),
      nightflag: nightflag.toString(),
      extensions: extensions,
    })
    const url = `${base_url}&${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.status === "1") {
        console.log("Transit route planning successful. Routes:", data.route)
        return data.route
      } else {
        console.error("Transit route planning failed. Response:", data)
        return null
      }
    } catch (error) {
      console.error("Error during transit route planning:", error)
      return null
    }
  },
})

const drivingRoute = tool({
  description: `Plan a driving route between two locations. 
    Returns driving route options with distance, duration, and turn-by-turn directions.
    strategy: 
        下方策略仅返回多条路径规划结果
        10，返回结果会躲避拥堵，路程较短，尽量缩短时间，与高德地图的默认策略也就是不进行任何勾选一致
        11，返回三个结果包含：时间最短；距离最短；躲避拥堵 （由于有更优秀的算法，建议用10代替）
        12，返回的结果考虑路况，尽量躲避拥堵而规划路径，与高德地图的“躲避拥堵”策略一致
        13，返回的结果不走高速，与高德地图“不走高速”策略一致
        14，返回的结果尽可能规划收费较低甚至免费的路径，与高德地图“避免收费”策略一致
        15，返回的结果考虑路况，尽量躲避拥堵而规划路径，并且不走高速，与高德地图的“躲避拥堵&不走高速”策略一致
        16，返回的结果尽量不走高速，并且尽量规划收费较低甚至免费的路径结果，与高德地图的“避免收费&不走高速”策略一致
        17，返回路径规划结果会尽量的躲避拥堵，并且规划收费较低甚至免费的路径结果，与高德地图的“躲避拥堵&避免收费”策略一致
        18，返回的结果尽量躲避拥堵，规划收费较低甚至免费的路径结果，并且尽量不走高速路，与高德地图的“避免拥堵&避免收费&不走高速”策略一致
        19，返回的结果会优先选择高速路，与高德地图的“高速优先”策略一致
        20，返回的结果会优先考虑高速路，并且会考虑路况躲避拥堵，与高德地图的“躲避拥堵&高速优先”策略一致
        下方策略仅返回一条路径规划结果
        0，速度优先，此路线不一定距离最短
        1，费用优先，不走收费路段，且耗时最少的路线
        2，常规最快，综合距离/耗时规划结果
        3，速度优先，不走快速路，例如京通快速路（因为策略迭代，建议使用13）
        4，躲避拥堵，但是可能会存在绕路的情况，耗时可能较长
        5，多策略（同时使用速度优先、费用优先、距离优先三个策略计算路径）。
             其中必须说明，就算使用三个策略算路，会根据路况不固定的返回一~三条路径规划信息。
        6，速度优先，不走高速，但是不排除走其余收费路段
        7，费用优先，不走高速且避免所有收费路段
        8，躲避拥堵和收费，可能存在走高速的情况，并且考虑路况不走拥堵路线，但有可能存在绕路和时间较长
        9，躲避拥堵和收费，不走高速
    carType: 0：普通汽车(默认值) 1：纯电动车 2：插电混动车
    ferry: 0=不走轮渡（默认值），1=走轮渡
    `,

  inputSchema: z.object({
    originLng: z.number(),
    originLat: z.number(),
    destinationLng: z.number(),
    destinationLat: z.number(),
    strategy: z.number().optional(),
    waypoints: z.array(z.string()).optional(),
    avoidpolygons: z.string().optional(),
    cartype: z.number().optional(),
    ferry: z.number().optional(),
    extensions: z.enum(["base", "all"]).optional(),
  }),
  execute: async ({
    originLng,
    originLat,
    destinationLng,
    destinationLat,
    strategy = 10,
    waypoints,
    avoidpolygons,
    cartype = 0,
    ferry = 0,
    extensions = "base",
  }) => {
    console.log(
      `Driving route tool called from (${originLng},${originLat}) to (${destinationLng},${destinationLat})`
    )
    const base_url = "https://restapi.amap.com/v3/direction/driving?parameters"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      origin: `${originLng},${originLat}`,
      destination: `${destinationLng},${destinationLat}`,
      strategy: strategy.toString(),
      cartype: cartype.toString(),
      ferry: ferry.toString(),
      extensions: extensions,
    })
    if (waypoints && waypoints.length > 0) {
      params.append("waypoints", waypoints.join(";"))
    }
    if (avoidpolygons) {
      params.append("avoidpolygons", avoidpolygons)
    }
    const url = `${base_url}&${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.status === "1") {
        console.log("Driving route planning successful. Routes:", data.route)
        return data.route
      } else {
        console.error("Driving route planning failed. Response:", data)
        return null
      }
    } catch (error) {
      console.error("Error during driving route planning:", error)
      return null
    }
  },
})

const bicyclingRoute = tool({
  description: `Plan a bicycling route between two locations. 
    Returns bicycling route options with distance, duration, and turn-by-turn directions.
    Considers overpasses, one-way streets, and closures. Supports up to 500km routes.
    `,
  inputSchema: z.object({
    originLng: z.number(),
    originLat: z.number(),
    destinationLng: z.number(),
    destinationLat: z.number(),
  }),
  execute: async ({ originLng, originLat, destinationLng, destinationLat }) => {
    console.log(
      `Bicycling route tool called from (${originLng},${originLat}) to (${destinationLng},${destinationLat})`
    )
    const base_url =
      "https://restapi.amap.com/v4/direction/bicycling?parameters"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      origin: `${originLng},${originLat}`,
      destination: `${destinationLng},${destinationLat}`,
    })
    const url = `${base_url}&${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.errcode === 0) {
        console.log("Bicycling route planning successful. Routes:", data.data)
        return data.data
      } else {
        console.error("Bicycling route planning failed. Response:", data)
        return null
      }
    } catch (error) {
      console.error("Error during bicycling route planning:", error)
      return null
    }
  },
})

const weatherQuery = tool({
  description: `Query weather information for a location in Beijing. 
    Returns current weather conditions or weather forecast.
    extensions: base for current weather, all for forecast 
    city field should be the adcode of the city, which you can get from the reverse geocode tool 
    `,
  inputSchema: z.object({
    city: z.string(),
    extensions: z.enum(["base", "all"]).optional(),
  }),
  execute: async ({ city, extensions = "base" }) => {
    console.log(
      `Weather query tool called for city: ${city}, extensions: ${extensions}`
    )
    const base_url = "https://restapi.amap.com/v3/weather/weatherInfo"
    const params = new URLSearchParams({
      key: process.env.AMAP_API_KEY || "",
      city: city,
      extensions: extensions,
    })
    const url = `${base_url}?${params.toString()}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.status === "1") {
        console.log("Weather query successful. Data:", data.lives || data.forecasts)
        return data.lives || data.forecasts
      } else {
        console.error("Weather query failed. Response:", data)
        return null
      }
    } catch (error) {
      console.error("Error during weather query:", error)
      return null
    }
  },
})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()
  let location: { lng: number | undefined; lat: number | undefined } = {
    lng: undefined,
    lat: undefined,
  }
  const locationTool = tool({
    description:
      "return the current geolocation of the user. undefined if the location cannot be determined. ",
    inputSchema: z.object({}),
    execute: async () => {
      console.log("Location tool called. Current location:", location)
      return location
    },
  })
  if (messages.length) {
    const lastMessage = messages[messages.length - 1]
    const metadata = lastMessage.metadata as
      | { location?: { lng: number; lat: number } }
      | undefined
    console.log("Received message metadata:", metadata)
    if (metadata && metadata.location) {
      location = metadata.location
    }
  }
  const modelMessages = convertToModelMessages(messages)
  const resolvedModelMessages = await modelMessages
  console.log("Resolved model messages:", resolvedModelMessages)
  const result = await streamText({
    model: registry.languageModel("custom > deepseek-chat"),
    messages: resolvedModelMessages,
    tools: {
      location: locationTool,
      reverseGeocode: reverseGeocodeTool,
      getAttractions: getAttractions,
      searchPoI: searchPoI,
      searchAround: searchAround,
      transitRoute: transitRoute,
      drivingRoute: drivingRoute,
      bicyclingRoute: bicyclingRoute,
      weatherQuery: weatherQuery,
    },
    system: `You are a helpful and precise assistant for planning trips for project BeingJing(在京, a project to help users, especially foreigners, explore Beijing).
     You have access to tools that can provide information about locations in Beijing, such as reverse geocoding,
      searching for nearby attractions, searching for points of interest, and planning routes using different transportation methods.
       Use these tools to answer user questions and provide recommendations based on the user's location and preferences. 
       Always try to provide detailed and accurate information to help users have a great experience exploring Beijing.
       It is accpetable to response to non-sensical questions from user with your own knowledge, 
       but you should try to use the tools to get the information as much as possible.
       For example, if user asks "What attractions are near me?", you can call the location tool to get the user's current location,
       and if user ask you to provide explanation about some math problem, 
       you can just use your own knowledge to answer the question without using the tools.
       You can add some jokes if the user ask you questions that are not related to the tools, 
       and kindly remind user that you can provide more accurate and detailed information if they ask questions related to the tools.

       Geolocation information provided by the location tool may be inaccurate, and when it fails to get user's location, it may mean that the user denied the location permission or there is some error with the geolocation service.
       In this case, you can kindly ask user to allow location access or provide their location information in other ways, such as by searching for a nearby POI and asking if that POI is close to them.
       When user provides location information in other ways, such as through reverse geocoding or searching for nearby POIs, the geolocation information may also be inaccurate. 
       You can use the provided location information to give recommendations, but you should also kindly remind user that the location information may be inaccurate and the recommendations may not be perfect.
       
       Tools may response in Chinese, but you should always respond to user in the language they use to talk to you, 
       and you should try to translate the information provided by the tools into the language used by user when necessary.

       You should not mention the tools in your response, and you should just use the information provided by the tools to answer user questions and provide recommendations.

       You should not ask for user's location information directly. If you need user's location information, you can call the location tool to get the user's location, 
       and if the location information is unavailable, you can ask user to provide their location information in other ways, such as describing nearby POIs or check geolocation permissions. 
       `,
    stopWhen: stepCountIs(10),
  })
  return result.toUIMessageStreamResponse()
}
