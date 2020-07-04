// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const sayHello = (name='Rohit') => {
  console.log('Hi ' + name);
}

const sayHello1 = (greeting='Hi', name='Rohit') => {
  console.log(`${greeting} ${name}`);
}

const sayHello2 = (name) => {
  console.log(`Hello ${name}`);
}

const sayHello3 = () => 'Goededag Rohit!';

sayHello();
sayHello1('Hello', 'World');
sayHello2();
console.log(sayHello3());

const checkInput = (callBackFn, ...unlimitedStrings) => {
  for (const singleString of unlimitedStrings) {
    if (singleString) {
      callBackFn(singleString);
    }
  }
}

checkInput(sayHello, 'Rohit', 'Namrata', 'Bhagyashri', 'Hanumant');

const bindFnBtnSelected = document.getElementById('bindFunctionsBtn');
bindFnBtnSelected.addEventListener('click', sayHello2.bind(this, 'Max'))