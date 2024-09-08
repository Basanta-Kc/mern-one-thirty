// n = 1, 1
// n =2 => 1 * 2
// n = 10 => 1 * 2  *3 *.... 10 =
const factResultStore = {}

function factorial(num) { // num = 10;
    // factResulStore[10] => undefined (fasly)
  if (factResultStore[num]) return factResultStore[num];

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    console.log("loop is running");
    fact = fact * i;
  }

  factResultStore[num] = fact;
  // factResultStore[10] = output ( 328000000)
  return fact;
}

factorial(10); // 10 => 10000
factorial(10)

