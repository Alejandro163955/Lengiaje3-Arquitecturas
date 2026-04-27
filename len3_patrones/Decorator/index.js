class Notifier { send(msg) { return `Enviando: ${msg}`; } }
class WhatsAppDecorator {
    constructor(notifier) { this.notifier = notifier; }
    send(msg) { return this.notifier.send(msg) + " y también por WhatsApp"; }
}