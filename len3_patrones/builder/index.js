class Burger {
    constructor() { this.ingredients = []; }
}
class BurgerBuilder {
    constructor() { this.burger = new Burger(); }
    addCheese() { this.burger.ingredients.push("Queso"); return this; }
    addBacon() { this.burger.ingredients.push("Tocineta"); return this; }
    build() { return this.burger; }
}