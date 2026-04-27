class ExportVisitor {
    visitElectronic(item) { return `XML de ${item.name}`; }
    visitFood(item) { return `JSON de ${item.name}`; }
}