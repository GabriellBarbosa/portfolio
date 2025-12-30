import "server-only";
import defaultDict from "./dictionaries/pt.json";

export type Languages = "en" | "pt";

export type Dict = typeof defaultDict;

const dictionaries = {
  en: async () => await import("./dictionaries/en.json"),
  pt: async () => await import("./dictionaries/pt.json"),
};

export const getDictionary = async (locale: Languages): Promise<Dict> =>
  dictionaries[locale]();
