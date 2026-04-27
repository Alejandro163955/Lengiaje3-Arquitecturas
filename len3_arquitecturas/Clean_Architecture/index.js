// Patrón Result para manejo de errores funcional
class Result {
    constructor(isSuccess, error, value) {
        this.isSuccess = isSuccess;
        this.error = error;
        this.value = value;
    }
    static ok(val) { return new Result(true, null, val); }
    static fail(err) { return new Result(false, err, null); }
}

// --- CORE / DOMAIN ---
class TaskEntity {
    constructor(title) {
        if (!title) throw new Error("Título inválido");
        this.title = title;
    }
}

// --- APPLICATION (Use Case) ---
class CreateTaskUseCase {
    constructor(taskRepositoryPort) {
        this.repository = taskRepositoryPort;
    }

    run(title) {
        try {
            const task = new TaskEntity(title);
            const saved = this.repository.save(task);
            return Result.ok(saved);
        } catch (e) {
            return Result.fail(e.message);
        }
    }
}

// --- ADAPTER (Infrastructure) ---
class MongoTaskAdapter {
    save(task) { 
        console.log("Guardando en DB..."); 
        return { ...task, id: 'db-123' }; 
    }
}

const useCase = new CreateTaskUseCase(new MongoTaskAdapter());
console.log("Hexagonal:", useCase.run("Aprender Hexagonal"));