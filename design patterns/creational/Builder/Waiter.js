class Waiter {
    pizzaBuilder;

     setPizzaBuilder(pizzaBuilder) {
        this.pizzaBuilder = pizzaBuilder;
    }

     getPizza() {
        return this.pizzaBuilder.getPizza();
    }

     constructPizza() {
        this.pizzaBuilder.createPizza();
        this.pizzaBuilder.buildDough();
        this.pizzaBuilder.buildSauce();
        this.pizzaBuilder.buildTopping();
    }
}

module.exports = Waiter;