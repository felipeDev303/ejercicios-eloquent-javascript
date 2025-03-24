// Patrones de diseño que aprovechan el polimorfismo: Visitor Interface
class Visitor {
  visit(element) {}
}

// Concrete Visitor
class TaxVisitor extends Visitor {
  visit(element) {
    if (element instanceof Liquor) {
      return element.price * 0.18; // Liquor tax rate: 18%
    } else if (element instanceof Tobacco) {
      return element.price * 0.25; // Tobacco tax rate: 25%
    } else if (element instanceof Necessity) {
      return element.price * 0.05; // Necessity tax rate: 5%
    }
  }
}

// Visitable Interface
class Visitable {
  accept(visitor) {}
}

// Concrete Visitable Elements
class Liquor extends Visitable {
  constructor(price) {
    super();
    this.price = price;
  }

  accept(visitor) {
    return visitor.visit(this);
  }
}

class Tobacco extends Visitable {
  constructor(price) {
    super();
    this.price = price;
  }

  accept(visitor) {
    return visitor.visit(this);
  }
}

class Necessity extends Visitable {
  constructor(price) {
    super();
    this.price = price;
  }

  accept(visitor) {
    return visitor.visit(this);
  }
}

// Usage
const items = [new Liquor(20), new Tobacco(30), new Necessity(50)];
const visitor = new TaxVisitor();

const totalTaxes = items.reduce((acc, item) => acc + item.accept(visitor), 0);
console.log(`Total Taxes: $${totalTaxes.toFixed(2)}`);
