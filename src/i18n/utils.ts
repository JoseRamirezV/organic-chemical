import ui from '@data/ui.json'
import { defaultLang, languages } from "./ui";

export type Lang = keyof typeof languages;
type UI = typeof ui;
type Keys = keyof UI[Lang];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: Keys) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
