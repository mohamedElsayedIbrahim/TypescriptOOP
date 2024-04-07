export class Invoice {
    constructor(fromTo, amount, details) {
        this.fromTo = fromTo;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `From ${this.fromTo} for ${this.details} with amount ${this.amount}$`;
    }
    ;
}
