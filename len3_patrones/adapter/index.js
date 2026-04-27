class Ethernet { connect() { return "Conectado vía Ethernet"; } }
class USBAdapter {
    constructor(ethernet) { this.ethernet = ethernet; }
    connectUSB() { return this.ethernet.connect() + " mediante adaptador USB"; }
}