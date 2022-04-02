//Back to Binary

//Given 2 binary numbers, print the prime numbers in between those 2 binary numbers.
// Input You are given 2 binary numbers

// Sample Input 1
// Input: num1 = 101, num2 = 11111

// Output
// 5, 7, 11, 13, 17, 19, 23, 29, 31

let num1 = "101";
let num2 = "11111";

let num1Length = num1.length;
let num2Length = num2.length;

let num1Multiplier = 1;
let num2Multiplier = 1;

let biNum1 = 0;
let biNum2 = 2;

for (let i = 1; i <= num1Length; i++) {
  biNum1 += num1[num1Length - i] * num1Multiplier;
  num1Multiplier *= 2;
}

for (let i = 1; i <= num2Length; i++) {
  biNum2 += num2[num2Length - i] * num2Multiplier;
  num2Multiplier *= 2;
}

for (let i = biNum1; i <= biNum2; i++) {
  let isPrime = true;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
