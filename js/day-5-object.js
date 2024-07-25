// 1. function can be passed as an value
// const add = function (a, b) {
//   return a + b;
// };

// const addv2 = add; // add(2,3) , addv2(a,b)

// const highOrderFunc = function (callbackFunc) {
//   callbackFunc();
// };

// const func = function () {};

// highOrderFunc(func);
// highOrderFunc(function () {});

// const highOrderFuncV2 = function () {
//   let count = 0;
//   const func = function () {};

//   return func;
// };

// const highOrderFuncV3 = function () {
//    count count = 0
//   return function () {};
// };

// //  Arrow Function
// function add(a, b) {
//   return a + b;
// }

// const addArrFunc = (a, b) => {
//   const result = a + b;
//   return result;
// };

// const addArrFuncOneLiner = (a, b) => a + b;

// function multiplyBy4() {
//   return num * 4;
// }

// const multiplyBy4 = (n) => n * 4;
// const a = 2;
// const b = 4;
// const c = a;

// const add = function () {};

// const addv2 = add; // addv2() , add()

// Animal a = new Animal()
// Person p = new Person("basanta", 20)
// Object

// const person = { name: "basanta" };
// console.log(person);
// person.age = 22;
// person.job = "software engineer";
// console.log(person);
// delete person.age;
// console.log(person);
// person.job = 'qa'
// conole.log(person)

// const key = prompt("what detail you need?");

// perosn[key] = "value"

// const person = {};
// while (true) {
//   const key = prompt("enter key:");
//   if (key === "exit") {
//     console.log("final result: ", person);
//     break;
//   }
//   const value = prompt("enter value:");
//   person[key] = value;
// }
// console.log(person);
// const a = {};
// const b = {};
// const e = a; // paseed by reference
// a.name = "basanta"
// console.log(e.name);

// passed by value
let a = 2;
let b = a;
b = 3;

// const c = 2;
// const d = 2;

// console.log(c===d); // true

// console.log(a === b)
// // console.log(a === e) // ture

const person = {
  name: "basanta",
  age: 0,
  father: {
    name: "Devi",
    age: 50,
  },
};

if (person.age) {
}

console.log("name" in person);

// console.log(person.mother?.name ?? "no mother name");

// const father = person.father;

// person.father.age = 40;
// father.age = 48;

// function greet(obj) {
//   // obj = person
//   obj.greet = "helloo";
// }

// greet(person);

// console.log(person);

// delete person.name;

// console.log(person);

// // person = {}

// // person.name = "basnata kc";
// // console.log(person);
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true, // multiword property name must be quoted
// };

// user.age
// user.name
// user['likes birds']
// for (let key in person) {
//   console.log(person[key]);
// }

// const name = "basanta";
// let num = 2;
// const person = {
//   age: num,
//   name, // name: name
//   0: "value 0",
// };

// person[0];
// console.log(person);
