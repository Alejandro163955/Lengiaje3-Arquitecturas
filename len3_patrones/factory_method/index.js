class Transport { deliver() {} }
class Truck extends Transport { deliver() { return "Entrega por tierra"; } }
class Ship extends Transport { deliver() { return "Entrega por mar"; } }

class Logistics {
    createTransport(type) {
        if (type === 'sea') return new Ship();
        return new Truck();
    }
}