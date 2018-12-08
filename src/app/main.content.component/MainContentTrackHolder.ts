export class MainContentTrackHolder {
  private name: string;
  private source: string;


  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getSource(): string {
    return this.source;
  }

  setSource(value: string) {
    this.source = value;
  }
}
