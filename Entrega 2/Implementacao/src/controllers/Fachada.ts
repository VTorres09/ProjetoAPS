const ControladorUsuarioClass = require('../models/ControladorUsuario')
const ControladorPratoClass = require('../models/ControladorPrato')

class Fachada {
    static cadastrarUsuario(cpf: string, senha: string) {

        let controladorUsuario = new ControladorUsuarioClass();

        controladorUsuario.cadastrarUsuario(cpf, senha);

    }

    static cadastrarPrato
        (name: string, description: string, ingredients: string) {

        let controladorPrato = new ControladorPratoClass();

        controladorPrato.cadastrarPrato(name, description, ingredients)

    }

    static async listarPratos() {

        let controladorPrato = new ControladorPratoClass();
        return await controladorPrato.listarPratos()

    }

    static async autenticarUsuario(cpf: string, senha: string) {
        let controladorUsuario = new ControladorUsuarioClass();

        return await controladorUsuario.autenticarUsuario(cpf, senha)
    }


}

module.exports = Fachada;