const Pizza = require("../Pizza");

class PizzBuilder {
  pizza;

  getPizza() {
    return this.pizza;
  }

  createPizza() {
    this.pizza = new Pizza();
  }
}

module.exports = PizzBuilder;
