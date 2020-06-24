const task3Element = document.getElementById('task-3');

function greeting() {
  alert('Goedenavond!');
}
function personalisedGreeting(name) {
  alert(`Goedenavond ${name}`);
}

greeting(); 
personalisedGreeting('Rohit');

personalisedGreeting()

task3Element.addEventListener('click', greeting);

function familyGreeting(motherName, sonName, daughterName) {
  return `Goedenavond ${motherName}, ${sonName}, ${daughterName}`;
}

let motherName = 'Bhagyashri';
let sonName = 'Rohit';
let daughterName = 'Namrata';

const familyGreetingText = familyGreeting(motherName, sonName, daughterName);
alert(familyGreetingText);
