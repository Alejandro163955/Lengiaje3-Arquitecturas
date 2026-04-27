class GameState { constructor(lvl) { this.lvl = lvl; } }
class Caretaker {
    constructor() { this.history = []; }
    save(state) { this.history.push(state); }
}