import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
import { HasFormattor } from "./interfaces/Hasformattor.js";

// let doc: HasFormattor;

// doc = new Invoice("blal", "abc", 1);

// console.log(doc);


const form = document.querySelector(".form") as HTMLFormElement;

// console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormattor;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payments(...values);
  }

  list.render(doc, type.value, "end");
  // console.log(doc);
});
