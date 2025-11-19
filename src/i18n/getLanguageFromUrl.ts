import { ui, defaultLang } from "./ui";
import type { Lang } from "./utils";

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as Lang;
	return defaultLang;
}