import { Invoice } from "./Classes/Invoice.js";
import { Hasformat } from "./Interfaces/Hasformat.js";
import { Payment } from './Classes/Payment.js';
import { Template } from "./Classes/Template.js";


let form:HTMLFormElement = document.querySelector('.new-item-form')!;
let type:HTMLSelectElement = document.querySelector('#type')!;
let tofrom:HTMLInputElement = document.querySelector('#tofrom')!;
let details:HTMLInputElement = document.querySelector('#details')!;
let amount:HTMLInputElement = document.querySelector('#amount')!;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let record:Hasformat;
    let values:[a:string,b:number,c:string];

    values = [tofrom.value,amount.valueAsNumber,details.value]
    
    if (type.value === 'invoice') {
        record = new Invoice(...values)
    } else {
        record = new Payment(...values)
    }

    new Template(record,type.value).viewData();

    form.reset()
    
});