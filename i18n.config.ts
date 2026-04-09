import type { I18nConfig } from "next-i18next/proxy"

const i18nConfig: I18nConfig = {
  supportedLngs: ["en", "zh_cn"],
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common", "citywalk", "buddy", "indoor", "aboutUs"],
  resourceLoader: (lng, ns) => import(`./app/i18n/locales/${lng}/${ns}.json`),
}

export default i18nConfig
