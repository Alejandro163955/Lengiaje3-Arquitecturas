class TreeType { constructor(name, color) { this.name = name; this.color = color; } }
class TreeFactory {
    static getTreeType(name, color) {
        this.types = this.types || {};
        if (!this.types[name]) this.types[name] = new TreeType(name, color);
        return this.types[name];
    }
}