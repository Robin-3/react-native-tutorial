export class Formatter {
  static capitalize(str: string, allWords: boolean = false) {
    return str.replace(allWords ? /\b\w/g : /\b\w/, (c) => c.toUpperCase());
  }
}