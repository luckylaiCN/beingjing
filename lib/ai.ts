import { createOpenAICompatible } from "@ai-sdk/openai-compatible"
import { createProviderRegistry } from "ai"

export const registry = createProviderRegistry(
  {
    custom: createOpenAICompatible({
      name: "custom",
      apiKey: process.env.CUSTOM_API_KEY,
      baseURL: "https://api.deepseek.com/v1",
    }),
  },
  { separator: " > " }
)
