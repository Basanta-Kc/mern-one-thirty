// Function => a,b => a+b
// x = a +b;
// y = c + m;
// z = d + m;
// x= add(a,b)

// const count = 0;

// function add(a, b) {
// let a= 2, b= 3
//   const result = a + b;
//   return result;
// }

// const result = add(2, 3);
// console.log(result);
// let a;

// function showMessage(userName = "Sir/ Madam") {
//   let message = "Hello, " + userName;
//   alert(message);
// }

const a = 10;
const b = a;

function add(a, b) {
  console.log(a + b);
  const result = a + b;
  return result;
}

// Assigning function to a variable
const add = function (a, b) {
  console.log(a + b);
  const result = a + b;
  return result;
};
// can be passed around same as variables
const addV2 = add;

addV2(3, 4);
add(5, 6);

const num1 = 10;
const num2 = 20;
add(num1, num2);

const func1 = function () {
  console.log("from func 1");
};

const func2 = function () {
  console.log("from func2");
};

const highOrderFunc = function (cb1, cb2) {
  // cb1 = func1
  // cb2 = func2

  cb1();
  cb2();
};

// function can be passed as an argument to a function just like normal variables
highOrderFunc(func1, func2);

// function can return another function just like normal variables
const highOrderFunc2 = function () {
  return function () {
    console.log("this is func");
  };
};

const returnedFunc = highOrderFunc2();
returnedFunc();
