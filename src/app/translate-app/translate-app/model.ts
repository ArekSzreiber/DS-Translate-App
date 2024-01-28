export interface Language {
  code: string;
  name: string;
}

export function included(list: Language[], code: string | null): boolean {
  if (!code) {
    return false;
  }
  if (!list) {
    return false;
  }
  if (!list.length) {
    return false;
  }
  return list.some((language: Language) => language.code === code);
}