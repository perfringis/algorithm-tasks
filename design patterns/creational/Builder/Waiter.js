const HawaiianPizzaBuilder = require("../Builder/builders/HawaiianPizzaBuilder");
const SpicyPizzaBuilder = require("../Builder/builders/SpicyPizzaBuilder");

class Waiter {
  createHawaiianPizza(hawaiianPizzaBuilder) {
    return hawaiianPizzaBuilder
      .setDough("cross")
      .setSauce("mild")
      .setTopping("ham+pineapple")
      .createPizza();
  }

  createSpicyPizzaBuilder(spicyPizzaBuilder) {
    return spicyPizzaBuilder
      .setDough("pan baked")
      .setSauce("hot")
      .setTopping("pepperoni+salami")
      .createPizza();
  }
}

module.exports = Waiter;
