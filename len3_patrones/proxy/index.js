class RealData { request() { return "Datos pesados de la DB"; } }
class ProxyData {
    constructor() { this.realData = new RealData(); this.cache = null; }
    request() {
        if (!this.cache) this.cache = this.realData.request();
        return this.cache;
    }
}