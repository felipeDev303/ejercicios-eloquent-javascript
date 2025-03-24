// Patrones de diseño que aprovechan el polimorfismo: Template Method
// Abstract Class defining Template Method
class Meal {
  prepare() {
    this.prepareIngredients();
    this.cook();
    this.serve();
  }

  // Abstract methods to be implemented by subclasses
  prepareIngredients() {}
  cook() {}
  serve() {}
}

// Concrete Subclass
class Pizza extends Meal {
  prepareIngredients() {
    console.log("Prepare pizza ingredients");
  }

  cook() {
    console.log("Cook pizza in oven");
  }

  serve() {
    console.log("Serve pizza hot");
  }
}

// Concrete Subclass
class Pasta extends Meal {
  prepareIngredients() {
    console.log("Prepare pasta ingredients");
  }

  cook() {
    console.log("Boil pasta in water");
  }

  serve() {
    console.log("Serve pasta with sauce");
  }
}

// Usage
const pizza = new Pizza();
pizza.prepare();
// Outputs:
// Prepare pizza ingredients
// Cook pizza in oven
// Serve pizza hot

const pasta = new Pasta();
pasta.prepare();
// Outputs:
// Prepare pasta ingredients
// Boil pasta in water
// Serve pasta with sauce
