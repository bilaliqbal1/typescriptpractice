"use strict";
// const character = "bilal";  //its only for strings
// console.log(character);
// const input = document.querySelectorAll("input");
// console.log(input);
// input.forEach((input) => {
//   console.log(input);
// });
// const circ = (diameter: number) => {  //only takes number
//   return diameter * Math.PI;
// };
// console.log(circ(7.4));
//arrays  if array has only number then it will not take other data type and if array has both then it will take both of them
// let number = [1, 2, 3, 4, "billa"];
// number.push(5);
// number.push("hello");
// console.log(number);
//objects
//its only take same data type of every key value, and we dont remove any key value in reinitialization
// let student = {
//   name: "bilal",
//   class: "monti",
//   age: 20,
// };
// console.log(student);
//initialize datatypes
// let number: number;
// number = "f"
// number = 20
// let arr: string[] = [];
// arr.push("hi");
// console.log(arr);
//union types
// let arr1: (string | number | boolean)[] = [];
// arr1.push(23, "bilal", true);
// console.log(arr1);
// let uid: String | number;
// uid = 23;
// uid = "bilal";
// uid = true;
// console.log(uid);
//objects
// let obj : object;
// let obj: {
//   name: String;
//   age: number;
// };
// obj = {
//   name: "bilal",
//   age: 20,
//   //   arr1: [],
// };
// console.log(obj);
// any keyword for all data types
// let age: any;
// age = "he";
// age = 24;
// age = false;
//all above are accepted
// let arr1 : any[] = [];
// arr1.push("hello")
// arr1.push(20);
// let obj: { name: any; age: any };
// console.log("hi");
// let greet: Function;
// greet = () => {
//   console.log("hi");
// };
// type strORNum = string | number;
// type objOFname = { name: string; uid: strORNum };
// const greet = (user: objOFname) => {
//   console.log(`{user.name} say hello`);
// };
// interface IsPersion {
//   name: String;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPersion = {
//   name: "bilal",
//   age: 20,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(num: number): number {
//     console.log(num);
//     return num;
//   },
// };
// console.log(me);
// const invoice = new Invoice("bilal", "work on testing", 200);
// let invoices: Invoice[] = [];
// invoices.push(invoice);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// const uid = (obj: object) => {
// const uid = <X extends { name: string }>(obj: X) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docc = uid({ name: "bilal", age: 20 });
// console.log("this is doc", docc.name); //if you want to access name you must have to use generic like above example
// //generic with interfaces
// interface resource<T> {
//   uid: number;
//   name: string;
//   data: T;
// }
// const data: resource<object> = {
//   uid: 1,
//   name: "bilal",
//   data: { name: "iqbal" },
// };
// const data1: resource<string[]> = {
//   uid: 2,
//   name: "b",
//   data: ["2"],
// };
// enum NataijType {
//   MashaAllah,
//   Kamzori,
//   Behtreen,
//   Mehnat,
// }
// interface Nataij<T> {
//   rg: number;
//   nataijType: NataijType;
//   data: T;
// }
// const student: Nataij<object> = {
//   rg: 500,
//   nataijType: NataijType.Kamzori,
//   data: { name: "bilal" },
// };
// console.log(student);
//tuples for array data types
// let student :  [string, number];
// student = [12, "fdf"]
