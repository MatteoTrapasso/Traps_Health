export class Ibm {
  public id: string = undefined;
  public name: string = undefined;
  public value: string = undefined;
  static selectId: (item: Ibm) => string = item => item.id;
}
