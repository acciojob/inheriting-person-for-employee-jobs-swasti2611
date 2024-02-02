function Person(name, age) {}

function Employee(name, age, jobTitle) {}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() { //method using prototype
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);// prototype of person is inherited into employee
Employee.prototype.constructor = Employee; //get constructor of employee

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
window.Employee = Employee;