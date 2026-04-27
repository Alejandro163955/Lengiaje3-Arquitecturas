class Editor { save() { return "Archivo guardado"; } }
class SaveCommand {
    constructor(editor) { this.editor = editor; }
    execute() { return this.editor.save(); }
}