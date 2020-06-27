function cl(value) {
  console.log(value);
}

function generateRandomNumber() {
  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber > 0.7) {
    alert("Yahoo! your number is greater than 0.7");
  } // produces random number between 0 (including) and 1 (excluding)
}

const numbers = [11, 22, 33, 44, 55];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(i, numbers[i]);
}

for (const number of numbers) {
  cl(number);
}
cl("for in");
for (const numberKey in numbers) {
  cl([numberKey, numbers[numberKey]]);
}
let j = 0;
while (j < 5) {
  cl(numbers[j]);
  j += 1;
}
cl("do while");
let k = 3;
do {
  cl(numbers[k]);
} while (k < 2);

cl("start from the end");
for (let i = numbers.length - 1; i >= 0; i -= 1) {
  cl(numbers[i]);
}

function testLogicalOperators() {
  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();

  if ((randomNumber1 > 0.7 && randomNumber2 > 0.7) || (randomNumber1 < 0.2 || randomNumber2 < 0.2)) {
    alert(`${randomNumber1} ${randomNumber2}`);
  }

}