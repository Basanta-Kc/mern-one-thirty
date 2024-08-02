// const arr = [1, 2, 3];
// arr.map((num) => console.log(num));
// console.log(arr);
// console.log(arr.hasOwnProperty());

// // Animal => Class Dog: Animal {}
// const user = {
//   name: "basanta",
//   age: 10,
//   introduce: function () {
//     console.log(`My name is ${this.name}.I am ${this.age} years old`);
//   },
// };

// const anamul = {
//   name: "anamul",
//   age: 10,

// }

// const student = {
//   school: "Nature School",
//   faculty: "Science",
//   rollNo: 123,
// };

// student.__proto__ = user;

// console.log(student.hasOwnProperty("school"));

// Class User() name, age
// function User(name, age) {
//   // this = {}
//   this.name = name; // this.name = basanta
//   this.age = age; // this.age = 10

//   // Multiple Copis
//   this.introduce = function () {
//     console.log(`My name is ${this.name}.I am ${this.age} years old`);
//   };

//   // return this;
// }

// // No Mulitple copies
// User.prototype.introduceV2 = function () {
//   console.log(`My name is ${this.name}.I am ${this.age} years old`);
// };

// // Animal a = new Animal('')
// // const a : number = 0;
// const basanta = new User("basanta", 10);
// const akash = new User("Aakash", 12);

// console.log("akash", akash);
// console.log("basanta", basanta);
// basanta.introduceV2();

// function Student(name, age, school, faculty) {
//   // this = {}
//   User.call(this, name, age);
//   this.school = school;
//   this.faculty = faculty;
// }

// Object.setPrototypeOf(Student.prototype, User.prototype)

// const rajan = new Student("rajan", "32", "Mrogan", "Management");
// console.log(rajan.introduceV2());

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name}.I am ${this.age} years old`);
  }
}

class Student extends User {
  constructor(name, age, school, faculty) {
    super(name, age);
    this.school = school;
    this.faculty = faculty;
  }
}

const basanta = new Student("basanta", 10, "Morgan", "Science");
basanta.introduce();
console.log(basanta);
