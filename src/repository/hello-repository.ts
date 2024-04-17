export class HelloRepository {
  protected sapaan: Array<string> = ["Hallo from Arief!"]

  public getSapaan() {
    return this.sapaan
  }

  public addSapaan(word: string) {
    this.sapaan.push(word)
    return this.sapaan
  }
}
