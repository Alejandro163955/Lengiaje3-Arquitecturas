// --- Capa de Dominio (Entidad) ---
class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

// --- Capa de Datos (Repository) ---
class TaskRepository {
    constructor() { this.tasks = []; }
    save(task) { this.tasks.push(task); return task; }
}

// --- Capa de Negocio (Service) ---
class TaskService {
    constructor(repository) { this.repository = repository; }
    
    executeCreation(title) {
        const newTask = new Task(Date.now(), title);
        return this.repository.save(newTask);
    }
}

// --- Capa de Entrada (Controller) ---
const repo = new TaskRepository();
const service = new TaskService(repo);
console.log("Layered:", service.executeCreation("Estudiar Capas"));