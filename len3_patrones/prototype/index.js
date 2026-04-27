class Enemy {
    constructor(hp, speed) { this.hp = hp; this.speed = speed; }
    clone() { return new Enemy(this.hp, this.speed); }
}