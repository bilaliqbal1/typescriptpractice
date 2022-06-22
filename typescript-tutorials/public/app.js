import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
// let doc: HasFormattor;
// doc = new Invoice("blal", "abc", 1);
// console.log(doc);
const form = document.querySelector(".form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, "end");
    // console.log(doc);
});
