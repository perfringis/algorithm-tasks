class Pizza {
  dough = "";
  sauce = "";
  topping = "";

  constructor(pizzBuilder) {
    this.dough = pizzBuilder.dough;
    this.sauce = pizzBuilder.sauce;
    this.topping = pizzBuilder.topping;
  }

  getDough() {
    return this.dough;
  }

  getSauce() {
    return this.sauce;
  }

  getTopping() {
    return this.topping;
  }
}

module.exports = Pizza;
