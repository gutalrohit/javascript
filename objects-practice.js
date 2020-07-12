// * 1 creating an object - properties, methods

const p = {}; // creates a n emty object

const person = {
  name: 'Rohit',
  age: 28,
  work: {
    company: 'TCS',
    exp: 6
  },
  greeting() {
    console.log('Goededag!')
  }
}
person.greeting();

// * 2 dynamic property name
const propertyName = 'name';
const person2Name = 'Namrata';

const person2 = {
  [propertyName] : person2Name
}

// * 3 Modyfying objects
// add / Modify property
person2.age = 26;

//delete a property
delete person2.age;

// * 4 shorthand - if property and value name is same, only one can be kept
const obj = {
  person2Name: person2Name
}

//is same as 
const obj1 = {
  person2Name
}

// * 5 loop therough objects
for(const personKey in person) {
  console.log(person[personKey]);
}

// * 6 Object.assign
// copy one object into other, make deep copy and return target object
const obj2 = {};
const newobj = Object.assign(obj2, obj1)
console.log(newobj)

obj2.person2Name = 'Bhagyashri';

// obj2 is a deep copy of obj1, hence, it is not copied by reference, a new reference is created for it.
//changes in one wont be refelected in the other, except for the objects as values.

// spread operator - pull out object properties and work on them.
// example to create another object
const brother = {
  brotherName: 'Rohit'
}
const sister = {
  sisterName: 'Namrata'
}
const siblings = { ...brother, ...sister }

// also can be used to create copies of objects.
//if matching properties found, latter overrides the previously occured property value

// destructuring
// * one of the most important and useful addition of ES6

const { brotherName } = brother; 
const { sisterName } = siblings;//variable name should be same as property name

// * this keyword
// * this keyword points to an object, that is responsible for the call (execution)
// * in case of no particular object, it refers to the global object (window) in case of browser or undefined in case of using strict mode

console.log(this);

const personRohit = {
  name: 'Rohit',
  age: 28,
  work: {
    company: 'TCS',
    exp: 6
  },
  greeting() {
    return ('Goededag!')
  },
  retrunThis() {
    function some() {
      return this;
    };
    return some();
  }
};

const personSome = {};
console.log(personRohit.greeting());
console.log(personRohit.retrunThis())
//personSome.greeting(); //throws an error that is not a function


// this keyword and arrow function
// * arrow function doesnot have its own binding to the this keyword. It referes to the value of this in the outer scope (lexical scope) that it exists in
// example converting aboce objects method into an arrow function

const personNamrata = {
  name: 'Namrata',
  age: 28,
  work: {
    company: 'TCS',
    exp: 6
  },
  greeting: () => {
    return this;
  }
};
console.log(personNamrata.greeting()); //this would be returne as window object, eventhough fn was called on the object, this is because arrow function does not have its own binding
// for this and hence, it looks outer scope which is nothing but the global scope.

//check for existence of a property
('namer' in personNamrata) ? console.log('Ja') : console.log('Nee');

// * getters and setters

const detailsRohit = {
  get name() {
    return 'Gutal, ' + this._name;
  },
  set name(val) {
    this._name = val;
  },
  _name: 'Rohit',
  _age: 28
}
detailsRohit.name = 'Nam';
console.log(detailsRohit.name)

//* bind, call, apply - can be called as method borrowers and args mofifiers
// using these methods, we can call methods defined on other objects, pass them args, and chaange the pointing of 'this' object 

const cat = {
  name: 'Rima',
  greet(Val) {
    console.log('Meow from ' + this.name + Val);
  }
}

const boka = {
  name: 'Rom'
}

const catFn = cat.greet.bind(boka, 'ROhit'); // creates a callback
catFn();

cat.greet.call(boka, 'namy'); // calls the fn right away , args can be unlimited

cat.greet.apply(boka, ['nam', 'pam']) // calls the fn right away , args can only be an array
