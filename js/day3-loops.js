// loops => for, do while, while
// 1. i = 0;
// 2. condition ( i< 10) true or false
// 3. for => block => run
// 4. i++
// 5. conditon => 2
// .....
// for (let i = 0; i <= 10; i++) {
//   console.log("i =>", i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log("while i =>", i);
//   i++;
// }

// let j = 0;
// do {
//   console.log("dowhile j =>", j);
// } while (j < 0);

// Create a  sytem that ask user for number
// and tell if the number is(num % 2 = 0) divisible by 2 or not.
// if user enters exit. program should exit => exit
// else keep asking the user for number

// let num;
// do {
//   num = prompt("Enter number.");
//   if (num % 2 === 0) console.log("Divisible by 2");
//   else console.log("not divisible");
// } while ( num != "exit");

// num === exit program exit
// num != exit program continue

// for (let i = 0; i < 10; i++) {
//   if (i === 2 || i === 5) continue;
//   console.log(i);
// }

// print value of i if they are divisible by 2
for (let i = 0; i < 10; i++) {
  if (i === 3) break;

  if (i % 2 != 0) continue;
  console.log("i =>", i);
}

let num = 2;
switch (num) {
  case 1:
    console.log("Case 1");
    break;
  case 2:
    console.log("case 2");
    break;
  default:
    console.log("No Case matched.");
}

//Exercise: print form 10-20 using for loop

// userBalance = 1000;
// unser input = 1 => console.log(userBalance)
// 2 => ask amount => userBalane + userEnteredAmount
// 3 => ask amount => userBalance - withdrawWmount
// 4 => exit.
