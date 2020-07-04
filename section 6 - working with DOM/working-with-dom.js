// selecting elements using different queryselectors
// * when you select nodes using selectors, js objects containing properties of the elements are returned.
// * you can only select element nodes, all the nodes are available on the document object

console.dir(document.getElementById('item-3'));
console.dir(document.getElementById('item-4')); //null
console.dir(document.getElementsByClassName('item-class')); // array collection containg matching element nodes is returned
console.log(document.getElementsByName('item')); // empty is returned
console.log(document.getElementsByTagName('ul')); // empty is returned

//Using css query selectors
console.log(document.querySelector('#item-3'))
console.log(document.querySelector('.item-class')) // forst element is returned
console.log(document.querySelectorAll('.item-class')) // forst element is returned
console.log(document.querySelector('ul li#item-3')) // forst element is returned

//special queries
console.log(document.body)
console.log(document.head)
console.log(document.documentElement) //returns entire document



//exploring and changing DOM properties
const listElement = document.querySelector('li#item-3');
listElement.textContent = 'Item 3';
listElement.style.color = 'blue'; 