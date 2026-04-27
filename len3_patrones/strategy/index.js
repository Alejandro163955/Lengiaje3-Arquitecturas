class TaxUSA { apply(price) { return price * 1.10; } }
class TaxVE { apply(price) { return price * 1.16; } }
class Calculator { setStrategy(s) { this.s = s; } calculate(p) { return this.s.apply(p); } }