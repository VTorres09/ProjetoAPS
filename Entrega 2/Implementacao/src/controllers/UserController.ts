const fachada = require('./Fachada')

class UserController {

    constructor() {

    }

    cadastrarUsuario(cpf: string, nome: string) {
         fachada.cadastrarUsuario(cpf, nome)
    }

    autenticarUsuario() {

    }

}

module.exports = UserController