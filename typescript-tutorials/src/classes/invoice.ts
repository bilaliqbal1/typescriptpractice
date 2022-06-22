import { HasFormattor } from "../interfaces/Hasformattor";

//classes
export class Invoice implements HasFormattor {
  // client: String;
  // details: string;
  // amount: number;

  constructor(
    readonly client: String, //only use with access modifiers
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} is ${this.amount} for ${this.details}`;
  }
}
