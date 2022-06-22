import { HasFormattor } from "../interfaces/Hasformattor";

//classes
export class Payments implements HasFormattor {
  constructor(
    readonly recipient: String, //only use with access modifiers
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is ${this.amount} for ${this.details}`;
  }
}
