class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) return DatabaseConnection.instance;
        this.connected = true;
        DatabaseConnection.instance = this;
    }

    query(sql) {
        return { success: true, data: `Resultado de: ${sql}` };
    }
}
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
// db1 === db2 -> true