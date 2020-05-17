const Pizza = require("../Pizza");

class PizzBuilder {
  setDough(dough) {}

  setSauce(sauce) {}

  setTopping(topping) {}

  createPizza() {
    return new Pizza(this);
  }
}

module.exports = PizzBuilder;
