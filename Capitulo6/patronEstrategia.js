// Patrones de diseño que aprovechan el polimorfismo: Strategy Interface
class PaymentStrategy {
  pay(amount) {}
}

// Concrete Strategies
class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} using Credit Card`);
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} using PayPal`);
  }
}

// Context
class ShoppingCart {
  constructor(paymentStrategy) {
    this._paymentStrategy = paymentStrategy;
  }

  checkout(amount) {
    this._paymentStrategy.pay(amount);
  }
}

// Usage
const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100); // Outputs: Paid $100 using Credit Card

cart._paymentStrategy = new PayPalPayment();
cart.checkout(200); // Outputs: Paid $200 using PayPal
