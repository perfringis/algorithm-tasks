const Waiter = require("./Waiter");
const HawaiianPizzaBuilder = require("./builders/HawaiianPizzaBuilder");
const SpicyPizzaBuilder = require("./builders/SpicyPizzaBuilder");

const waiter = new Waiter();

const hawaiianPizzaBuilder = new HawaiianPizzaBuilder();
const spicyPizzaBuilder = new SpicyPizzaBuilder();

const hawaiianPizza = waiter.createHawaiianPizza(hawaiianPizzaBuilder);
const spicyPizza = waiter.createSpicyPizzaBuilder(spicyPizzaBuilder);

console.log(hawaiianPizza);
console.log(spicyPizza);