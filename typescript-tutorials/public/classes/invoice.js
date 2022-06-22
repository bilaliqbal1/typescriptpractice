//classes
export class Invoice {
    // client: String;
    // details: string;
    // amount: number;
    constructor(client, //only use with access modifiers
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} is ${this.amount} for ${this.details}`;
    }
}
