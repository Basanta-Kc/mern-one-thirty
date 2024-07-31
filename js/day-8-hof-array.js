// // const numbers = [2, 4, 5, 2, 9];

// // const logNumber = (number, index) => {
// //   console.log(number, index);
// // };
// // // numbers.forEach(logNumber);

// // // map => output = 5
// // // doubleNumber = [4,8, 10, 10, 18]

// // const multiplyBy2 = (number) => {
// //   return number * 2;
// // };
// // const doubleNumber = numbers.map(multiplyBy2);

// // // console.log(doubleNumber);

// // const studentsMarks = [85, 60, 20, 40, 80, 90, 70, 30];

// // // () => { return true}
// // const goodMarks = studentsMarks.find((mark) => mark >= 80);
// // console.log(goodMarks);
// const products = [
//   { name: "Laptop", price: 300 },
//   { name: "Phone", price: 200 },
//   { name: "Tablet", price: 150 },
//   { name: "Monitor", price: 400 },
// ];

// // ( { name: "Laptop", price: 300 }) => {
// //   product.price = product.price + 100;
// //   return product;
// // }

// // 1. find expensive product ( 300 > )
// // 2. find cheap product (250 <)
// // 3. give 10% discount on each product,
// // dicountedProductss = [ { name: Laptop, price: 300, disoucntedPrice: 200}]

// const hikeProductPrice = products.map((product) => {
//   return {
//     name: product.name,
//     price: product.price + 10,
//   };
// });

// console.log(products);

// // logNumber(2, 0)
// // logNumber(4, 1)
// // logNumber(5j, 2)

const numbers = [1, 34, 5, 5, 50];

numbers.forEach((number) => {
  console.log(number);
});

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

const bigNumbers = numbers.filter((number) => {
  return 30 < number;
});

const marks = [80, 85, 90, 80, 200]; // true
// const allStudentsDistinction = marks.every((mark) => mark >= 80);
// console.log({ allStudentsDistinction });
const totalMarks = marks.reduce((acc, curr) => {
  console.log({ acc, curr });
  return acc + curr;
}, 10);

console.log(totalMarks);

const products = [
  { name: "Laptop", price: 300 },
  { name: "Phone", price: 200 },
  { name: "Tablet", price: 150 },
  { name: "Monitor", price: 400 },
];

let sum = 0;
for (const product of products) {
  sum = sum + product.price;
}

const totalPriceOfProducts = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(totalPriceOfProducts);

const result = {};

const students = [
  { name: "Alice", score: 85, favFruit: "apple" },
  { name: "Bob", score: 92, favFruit: "apple" },
  { name: "Charlie", score: 48, favFruit: "orange" },
  { name: "David", score: 74, favFruit: "pineapple" },
  { name: "Eve", score: 68, favFruit: "orange" },
  { name: "Eve", score: 68, favFruit: "grapes" },
  { name: "Eve", score: 68, favFruit: "mango" },
  { name: "Eve", score: 68, favFruit: "grapes" },
  { name: "Eve", score: 68, favFruit: "mango" },
];

for (const student of students) {
  result[student.favFruit] = (result[student.favFruit] ?? 0) + 1;
  // if (student.favFruit === "apple") result.apple = result.apple + 1;
  // if (student.favFruit === "orange") result.orange = result.orange + 1;
  // if (student.favFruit === "pineapple")
  //   result.pineapple = result.pineapple + 1;
}

console.log(result);

const result2 = students.reduce((acc, curr) => {
  acc[curr.favFruit] = (acc[curr.favFruit] ?? 0) + 1;
  return acc;
}, {});

console.log(result2);
