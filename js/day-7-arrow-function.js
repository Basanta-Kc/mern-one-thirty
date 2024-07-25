const a = 2;
const addd = function () {};
const addarr = () => {};

addd();

console.log("out", this); // Window

// const this = {
//   alert: function(){

//   }
// }

// const a = {};
// const b = a;

const person = {
  name: "basanta",
  age: 10,
  greet: function () {
    console.log("object vitra ko this", this);
    const insideGreetFunc = () => {
      console.log("from inside greetFun", this);
    };

    insideGreetFunc();
    // person
  },
  greetArrow: () => {
    console.log("arrow ko this", this.age);
  },
};

const ajay = {
  name: "ajay",
  age: 20,
};

person.greet.call(ajay); // ajay.greet()

// person.greet();
// person.greetArrow();

// const arrowFunc = () => {
//   console.log("noram arrow func", this);
// };

// function test(){
//   console.log(this)
// }

// test()
