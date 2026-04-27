class Product { constructor(price) { this.price = price; } getPrice() { return this.price; } }
class Box {
    constructor() { this.children = []; }
    add(item) { this.children.push(item); }
    getPrice() { return this.children.reduce((sum, child) => sum + child.getPrice(), 0); }
}