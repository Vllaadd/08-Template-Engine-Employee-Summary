# Unit 10: Object Oriented Programming and TDD

## Overview

In this unit, we will discuss JavaScript's brand of OOP by introducing constructors and the prototype chain. Constructors are special functions that are extremely useful in creating objects of similar types. Prototypes are JavaScript’s built in system, allowing objects to inherit features from other objects. Prototypes are considered by many to be an advanced JavaScript topic and mastering it will be sure to give you an extra edge as a JavaScript developer.

We will cover test driven-development (TDD). When practicing TDD, we first write tests for application features before writing any code. Then, we write only the minimum amount of code needed to make the tests pass and repeat this process until the application is complete. Test-driven development has numerous benefits but ultimately helps us write more understandable and maintainable code.

We will conclude this unit with an introduction to modern class syntax and inheritance. ES6 introduced a `class` keyword which allows us to create objects using class structures similar to those found in other OOP programming languages. Under the hood, classes are just constructor functions with more intuitive syntax. They allow us to implement more advanced OOP patterns such as inheritance without needing to understand all of the nuances of JavaScript's prototypal inheritance system.

## Key Topics

* Objects

* this

* Callbacks

* Constructors

* Prototypes

* TDD

* Unit Tests

* Classes

* Inheritance

## Comprehension Check

You will be employer-ready if you can answer the following questions:

1. What is a constructor function and how would you use one?

2. What is the difference between classical inheritance and prototypal inheritance?

3. What are some benefits of test-driven development?

## Learning Objectives

You will be employer-competitive if you are able to:

* Integrate constructor functions into your applications, adding structure to your code and reducing the amount of code you have to write.

* Build entire applications using OOP, separating data and functionality into different constructor functions that can be composed together.

* Verify your code works as intended through the use of automated tests.

* Build applications using test-driven-development, writing tests before implementing functionality.

* Utilize modern ES6 class syntax to implement more advanced OOP patterns such as inheritance.

* Create more scalable applications that follow the OOP paradigm.

## Homework: Word Guess With Constructors

* In this unit's assignment, you will create a Word Guess command-line game using constructor functions.

## Syntax
**Constructor funcions** (and using Prototypes)

```javascript
// creating a constructor function called MyConstructor
function MyConstructor(varA, varB) {
    this.varA = varA;
    this.varB = varB;
    // assigning methods directly on the future object (instance) is not recomended. It's better to add it to the prototype of the constructor.
    this.printVarA = function() { 
        console.log(this.varA)
    }
}

MyConstructor.prototype.sharedFunc = function() {
    console.log('This method is shared by all instances of myClass');
}

// creating new object (instances) of MyConstructor
let newInstance1 = new MyConstructor('coding', 'rocks');
let newInstance2 = new MyConstructor('my', 'socks')
// calling methods directly
newInstance1.printVarA();    // prints 'coding'
newInstance1.sharedFunc();   // prints 'This method is shared by all instances of MyConstructor'
newInstance2.sharedFunc()    // prints 'This method is shared by all instances of MyConstructor'

```
Object Prototype docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes


**Class syntax (ES6)**
```javascript
class MyClass {
    constructor(varA, varB) {
        this.varA = varA;
        this.varB = varB;
        // incrementig a counter for each new object
        MyClass.count++;
    }
    
    printVarA() {
        console.log(this.varA)
    }
}
// create a static variable (only on the class)
MyClass.counter = 0;

var newInstance1 = new MyClass('coding', 'rocks');
newInstance1.printVarA();    // prints 'coding'

// getting a static propery of the class (i.e for counting)
let count = MyClass.counter; // 1
```
**SubClasses**
```javascript
// extends myClass example above
class MySubClass extends MyClass {
    constructor(varA, varB, varC) {
        super(varA, varB);  // YOU MUST CALL THE CONSTRUCTOR OF THE BASE CLASS BY USING super()
        this.varC = varC;
    }

    printVarC() {
        console.log(this.varC);
    }
}

var subClassInstance = new MySubClass('coding', 'is', 'dope');
subClassInstance.printVarA();   // prints 'coding'
subClassInstance.printVarC();   // prints 'dope'

```
ES6 Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Extending ES6 Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

**Writing unit tests**
```javascript
// Test structure
describe("Some function or component or class", () => {
    it("should do something cool", () => {
        // run test here
        expect("...").<matcher>;
    });
})
```
Unit Tests with Jest: https://jestjs.io/docs/en/getting-started
The list of "matcher" above can be found here https://jestjs.io/docs/en/using-matchers. Mocking documentation here https://jestjs.io/docs/en/mock-functions. 

## Class Resources :1st_place_medal: :ambulance: :athletic_shoe: :bank:

* [Everything you need to know about JavaScript](https://javascript.info/)

* [What is Object Oriented Programming (OOP)?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

* [Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

* [What is Test Driven Development (TDD)?](https://www.sitepoint.com/learning-javascript-test-driven-development-by-example/)

* [What and How do mocks work?](https://jestjs.io/docs/en/mock-functions.html)

* [Prototype Chaining in English](https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)

* [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

* [ES6 Cheatsheet](https://devhints.io/es6)

* [Jest Cheatsheet](https://devhints.io/jest)



## Helpful Links

* [Constructor Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

* [Prototype Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

* [Class Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

* [Jest Docs](https://jestjs.io/)
