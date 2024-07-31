// const numbers = new Array()
// const numbers = [1, 2, 3, 4, "basanta"];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // stack
// const fruitsStack = ["apple", "oragne", "mango"];
// // fruitsStack[0] = "grapes"
// // console.log(fruitsStack.pop())
// // console.log(fruitsStack)
// console.log(fruitsStack.shift());
// console.log(fruitsStack.unshift("pine apple"));
// console.log(fruitsStack);

// // queye
// const queue = ["basanta", "kritika", "chewang"];

// queue.shift();
// queue.shift();

// queue.push("jamal");

// console.log(queue);

// for(let key of queue){
//   console.log(key)
// }

const fruits = ["apple", "orange", "mango"];
for (const index in fruits) {
  console.log(index);
}

for (const fruit of fruits) {
  console.log(fruit);
}

// stack, queue, for of , for in

const queue = {
  list: [],
  enqueue: function (item) {
    this.list.push(item);
    console.log("Update Queue", this.list);
  },
  dequeue: function () {
    this.list.shift();
    console.log("Update Queue", this.list);
  },
};

queue.enqueue("basnata");
queue.enqueue("ram");

queue.dequeue();

const nums = [];
const nums2 = nums;

function test(numbers) {
  numbers[0] = 10;
}

test(nums2);

console.log(nums); // [10]
