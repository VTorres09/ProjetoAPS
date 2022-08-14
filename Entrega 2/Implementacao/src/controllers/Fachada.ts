const ControladorUsuarioClass = require('../models/ControladorUsuario')
const ControladorPratoClass = require('../models/ControladorPrato')

class Fachada {
    static cadastrarUsuario(cpf: string, senha: string) {
        
        let controladorUsuario = new ControladorUsuarioClass();

        controladorUsuario.cadastrarUsuario(cpf, senha);

    }

    static cadastrarPrato
    (name: string, description: string, ingredients: string, calories: string) {

        let controladorPrato = new ControladorPratoClass();

        controladorPrato.cadastrarPrato(name, description, ingredients, calories)

    }
}

module.exports = Fachada;