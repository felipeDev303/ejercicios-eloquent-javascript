// Base class representing an Animal
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Subclass for Dogs
class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

// Subclass for Cats
class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

// Subclass for Cows
class Cow extends Animal {
  makeSound() {
    console.log("Moo! Moo!");
  }
}

// Create instances of different animals
const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

// Invoke the makeSound() method on each animal
dog.makeSound(); // Outputs: Woof! Woof!
cat.makeSound(); // Outputs: Meow! Meow!
cow.makeSound(); // Outputs: Moo! Moo!

// Tipos de polimorfismo
// 1. Polimorfismo ad-hoc
function calculateArea(shape, arg1, arg2) {
  if (shape === "rectangle") {
    return arg1 * arg2;
  } else if (shape === "circle") {
    return Math.PI * Math.pow(arg1, 2);
  } else {
    throw new Error("Unsupported shape");
  }
}

console.log(calculateArea("rectangle", 5, 3)); // Outputs: 15 (Area of rectangle)
console.log(calculateArea("circle", 4)); // Outputs: 50.26548245743669 (Area of circle)

//2. Polimorfismo Paramétrico
// Generic function to return the length of an array or string
function getLength(input) {
  return input.length;
}

console.log(getLength([1, 2, 3])); // Outputs: 3
console.log(getLength("Hello")); // Outputs: 5

//3. Polimorfismo de subtipo:
// Base class representing a Shape
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

// Subclass representing a Circle
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

// Subclass representing a Square
class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

// Polymorphic behavior
const circle = new Circle();
const square = new Square();

circle.draw(); // Outputs: Drawing a circle
square.draw(); // Outputs: Drawing a square

// 4. Polimorfismo dinámico
// Base class representing a Shape
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

// Subclass representing a Circle
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

// Subclass representing a Square
class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

// Dynamic polymorphic behavior
const shapes = [new Circle(), new Square()];

shapes.forEach((shape) => {
  shape.draw(); // Outputs: Drawing a circle, Drawing a square
});

// 5. Herencia multiple
// Mixin for Student-related functionalities
const StudentMixin = {
  study() {
    console.log("Studying...");
  },
};

// Mixin for Athlete-related functionalities
const AthleteMixin = {
  exercise() {
    console.log("Exercising...");
  },
};

// Class representing a Student Athlete
class StudentAthlete {
  constructor(name) {
    this.name = name;
  }
}

// Object composition to simulate multiple inheritance
Object.assign(StudentAthlete.prototype, StudentMixin, AthleteMixin);

const studentAthlete = new StudentAthlete("Mahdi");

studentAthlete.study(); // Outputs: Studying...
studentAthlete.exercise(); // Outputs: Exercising...

// Polimorfismo en la programación funcional
// Higher-order function to perform an operation on two numbers
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

// Functions representing different operations
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(operate(3, 4, add)); // Outputs: 7
console.log(operate(3, 4, multiply)); // Outputs: 12
