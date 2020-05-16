let Waiter = require("./Waiter");
let HawaiianPizzaBuilder = require("./builders/HawaiianPizzaBuilder");
let SpicyPizzaBuilder = require("./builders/SpicyPizzaBuilder");


let waiter = new Waiter();

let hawaiianPizzaBuilder = new HawaiianPizzaBuilder();
// let spicyPizzaBuilder = new SpicyPizzaBuilder();

waiter.setPizzaBuilder(hawaiianPizzaBuilder);
waiter.constructPizza();

let pizza = waiter.getPizza();
console.log(pizza)