class WinFactory {
    createButton() { return { render: () => "Botón Estilo Windows" }; }
}
class MacFactory {
    createButton() { return { render: () => "Botón Estilo Mac" }; }
}