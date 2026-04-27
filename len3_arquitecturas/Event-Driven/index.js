const EventEmitter = require('events');

class TaskEmitter extends EventEmitter {}
const taskBus = new TaskEmitter();

// --- Productor de Eventos ---
class TaskManager {
    create(title) {
        const task = { id: Date.now(), title };
        console.log("SISTEMA: Tarea creada.");
        // Emitimos el evento
        taskBus.emit('TASK_CREATED', task);
    }
}

// --- Consumidores (Módulos independientes) ---
class NotificationService {
    constructor() {
        taskBus.on('TASK_CREATED', (task) => {
            console.log(`NOTIFICACIÓN: Enviando alerta para: ${task.title}`);
        });
    }
}

class LoggerService {
    constructor() {
        taskBus.on('TASK_CREATED', (task) => {
            console.log(`LOG: Registro en archivo de la tarea ${task.id}`);
        });
    }
}

// Inicialización
new NotificationService();
new LoggerService();
const manager = new TaskManager();

manager.create("Configurar Eventos");