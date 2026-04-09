import Attractions from "./attractions.json"

export async function GET() {
  return Response.json(Attractions)
}