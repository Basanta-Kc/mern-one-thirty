// // falsy => null, undefined, 0, "", NaN
// // null || undefined || false => true
// // null && false && true => false
// const a = null;
// const b = "";
// const result = true && true && "dsfdsa" && false;
// console.log(result);
// // Ask age using prompt function
// // if age is greater than 18 print eligble for drinking
// // else print you cannot drink
// const age = prompt("what is your age?");
// const result = age > 18 ? "eligibe" : "not eligble";
// console.log(result)
// // //  null || 2 && 3 || 4
// // // null || 3 || 4 => 3
// // student marks = 100-90 (A), 89-70 (b), 69 - 40 (c) 39- D
// if (false) {
//   console.log("true from if");
// } else if (true) {
//   console.log("else if");
// } else {
//   console.log("else");
// }

const marks = prompt("enter marks") ?? 10;
console.log(marks);

const person = {
  name: "ujjwal",
};

console.log(person.age);
let b = "";
// nullis coalescing (null & undefined) ??
const result = person.age ?? 10;
const result2 = 0 ?? "value";
