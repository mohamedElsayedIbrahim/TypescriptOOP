import { Invoice } from "./Classes/Invoice.js";
import { Payment } from './Classes/Payment.js';
import { Template } from "./Classes/Template.js";
let form = document.querySelector('.new-item-form');
let type = document.querySelector('#type');
let tofrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let record;
    let values;
    values = [tofrom.value, amount.valueAsNumber, details.value];
    if (type.value === 'invoice') {
        record = new Invoice(...values);
    }
    else {
        record = new Payment(...values);
    }
    new Template(record, type.value).viewData();
    form.reset();
});
