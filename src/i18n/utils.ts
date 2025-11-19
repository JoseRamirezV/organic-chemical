import { defaultLang } from "./ui";
import ui from '@data/ui.json';

export type Ui = typeof ui;
export type Lang = keyof Ui;
export type Keys = keyof Ui[Lang];

export function useTranslations(lang: Lang) {
  return function t<K extends keyof Ui[Lang]>(key: K): Ui[Lang][K] {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
