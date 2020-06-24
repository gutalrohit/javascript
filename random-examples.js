function cl(data) {
  console.log(data);
}

cl(2 + +'2'); //4 (number, not string)
cl(2 + +'2.2'); //4.2

let counter = 2;
let number = counter++;
let number2 = ++counter;
console.log(counter)
console.log(number)
console.log(number2)

cl(2 * '2')
cl('3' - 3)

function shadowVariables() {
  let counter = 5;
  cl(`shadow variable ${counter}`)
}
shadowVariables();
cl(counter)

let arrayList = [1, 'Rohit', true]
cl(arrayList[1])