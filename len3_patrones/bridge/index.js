class TV { on() { return "TV encendida"; } }
class Remote {
    constructor(device) { this.device = device; }
    togglePower() { return this.device.on(); }
}