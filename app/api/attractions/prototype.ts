export type AttractionCategory =
  | "neighborhood_walks"
  | "markets_nightlife"
  | "lifestyle_services"
  | "dining_experiences"
  | "cultural_attractions"

export type AttractionTag =
  | "group_friendly"
  | "hands_on_experience_available"
  | "reservation_required"
  | "international_cards_accepted"
  | "solo_friendly"
  | "english_friendly"

export interface Attraction {
  category: AttractionCategory
  tags: AttractionTag[]
  id: number
  poiName: string
  lng: number
  lat: number
  zh_cn: AttractionI18nInfo
  en: AttractionI18nInfo
}

export interface AttractionI18nInfo {
  name: string // 该字段用于存储景点的名称
  description: string // 该字段用于存储景点的描述信息
  address: string // 该字段用于存储景点的地址信息
  opening_hours: string // 该字段用于存储景点的营业时间信息
  pricing: string // 该字段用于存储景点的门票价格信息
  directions: string // 该字段用于存储景点的交通指南信息
}

export const getLangInfo = (attraction: Attraction, lang: "en" | "zh_cn") => {
  return (attraction[lang] as AttractionI18nInfo) || attraction.en
}

export const filterAttractions = (
  attractions: Attraction[],
  category?: AttractionCategory,
  tags?: AttractionTag[],
  keywords?: string
): Attraction[] => {
  return attractions.filter((attraction) => {
    if (category && attraction.category !== category) {
      return false
    }
    if (tags && !tags.every((tag) => attraction.tags.includes(tag))) {
      return false
    }
    if (keywords) {
      const enInfo = attraction.en
      const zhInfo = attraction.zh_cn
      const keywordLower = keywords.toLowerCase()
      const matchesEn =
        enInfo.name.toLowerCase().includes(keywordLower) ||
        enInfo.description.toLowerCase().includes(keywordLower) ||
        enInfo.address.toLowerCase().includes(keywordLower)
      const matchesZh =
        zhInfo.name.toLowerCase().includes(keywordLower) ||
        zhInfo.description.toLowerCase().includes(keywordLower) ||
        zhInfo.address.toLowerCase().includes(keywordLower)
      if (!matchesEn && !matchesZh) {
        return false
      }
    }
    return true
  })
}

export const sortAttractionsByDistance = (
  attractions: Attraction[],
  userLng: number,
  userLat: number
): Attraction[] => {
  return attractions.sort((a, b) => {
    const distanceA = Math.sqrt(
      Math.pow(a.lng - userLng, 2) + Math.pow(a.lat - userLat, 2)
    )
    const distanceB = Math.sqrt(
      Math.pow(b.lng - userLng, 2) + Math.pow(b.lat - userLat, 2)
    )
    return distanceA - distanceB
  })
}
