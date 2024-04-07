import { Hasformat } from "../Interfaces/Hasformat.js";

export class Invoice implements Hasformat{
    constructor(readonly fromTo:string,private amount:number, public details: string){}

    format():string{
        return `From ${this.fromTo} for ${this.details} with amount ${this.amount}$`;
    };
}