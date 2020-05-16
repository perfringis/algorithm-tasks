const PizzaBuilder = require("./PizzaBuilder");

class HawaiianPizzaBuilder extends PizzaBuilder {
  constructor() {
    super();
  }

  buildDough() {
    this.pizza.setDough("pan baked");
  }

  buildSauce() {
    this.pizza.setSauce("hot");
  }

  buildTopping() {
    this.pizza.setTopping("pepperoni+salami");
  }
}

module.exports = HawaiianPizzaBuilder;
