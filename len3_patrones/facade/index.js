class Engine { start() { return "Motor listo"; } }
class Lights { on() { return "Luces ON"; } }
class CarFacade {
    constructor() { this.engine = new Engine(); this.lights = new Lights(); }
    startCar() { return `${this.engine.start()}, ${this.lights.on()}`; }
}