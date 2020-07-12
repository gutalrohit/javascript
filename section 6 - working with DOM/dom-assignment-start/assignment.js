const selectFirstTask = document.getElementById('task-1');
const selectFirstTaskByQuery = document.querySelector('#task-1');
console.dir(document);

selectFirstTask.style.backgroundColor = 'black';
selectFirstTaskByQuery.style.color = 'white';

const headSectionTitle = document.querySelector('head title');
const titlePropertyOnDocumentObject = document.title;

headSectionTitle.textContent = 'Assignment - Solved!';
document.title = 'Assignment - Solved1!';

const headingElement = document.querySelector('h1');
headingElement.textContent = 'Assignment Solved!';
