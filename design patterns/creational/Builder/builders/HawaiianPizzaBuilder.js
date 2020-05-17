const PizzaBuilder = require("./PizzaBuilder");

class HawaiianPizzaBuilder extends PizzaBuilder {

  dough = "";
  sauce = "";
  topping = "";

  setDough(dough) {
    this.dough = dough;
    return this;
  }

  setSauce(sauce) {
    this.sauce = sauce;
    return this;
  }

  setTopping(topping) {
    this.topping = topping;
    return this;
  }
}

module.exports = HawaiianPizzaBuilder;
