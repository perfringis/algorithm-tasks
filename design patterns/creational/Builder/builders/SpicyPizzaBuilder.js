const PizzaBuilder = require("./PizzaBuilder");

class SpicyPizzaBuilder extends PizzaBuilder {
  buildDough() {
    pizza.setDough("pan baked");
  }

  buildSauce() {
    pizza.setSauce("hot");
  }

  buildTopping() {
    pizza.setTopping("pepperoni+salami");
  }
}

module.exports = SpicyPizzaBuilder;
