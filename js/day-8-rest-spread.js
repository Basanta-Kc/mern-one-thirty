// const nums = [11, 29, 30, 42, 53];
// const t = nums.slice(-2,5);
// console.log(t);
// // numbers.splice(1, 2, 4, 5);
// // console.log(numbers);
// const person = {
//   name: "basanta",
//   age: 10,
//   school: "nature",
//   salary: 10000,
//   father: {
//     age: 45,
//   },
// };

// const personProfile = {
//   color: "black",
//   sex: "MALE",
//   country: "nepal",
// };

// const user = {
//   ...person,
//   father: {
//     ...person.father,
//   },
//   ...personProfile,
// };

// console.log(user.father === person.father);

// // const personKoNam = person.name;
// // const age = person.age;

// const name = "akash";
// const { name: personName, age, ...restOfTheProperties } = person;
// // const personName = person.name //basanta
// // const age = person.age // 10
// // const restOfTheProperties = {
// // school: person.school, salary: person.salary
// //}

// console.log(restOfTheProperties);

// const numbers = [1, 2, 3, 4];
// // const firstNum = numbers[0]
// // const secondNum = numbers[1]

// const [firstNum, secondNum, ...remainingNumbs] = numbers;
// console.log(firstNum, secondNum, remainingNumbs);

// // function add(a, b) {
// //   let a = 2;
// // }
// // add(2, 3);

// function test(...allNums) {
//   console.log(allNums);
// }

// test(2, 3, 4, 5, 5);
const nums = [1, 2, 3, 4];
nums.splice(2, 2, "basanta", "rajan");
console.log(nums);
