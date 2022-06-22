//classes
export class Payments {
    constructor(recipient, //only use with access modifiers
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is ${this.amount} for ${this.details}`;
    }
}
