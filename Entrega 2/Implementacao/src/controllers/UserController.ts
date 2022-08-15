const fachada = require('./Fachada')

class UserController {

    constructor() {

    }

    cadastrarUsuario(cpf: string, senha: string) {
         fachada.cadastrarUsuario(cpf, senha)
    }

    async autenticarUsuario(cpf: string, senha: string) {
        return await fachada.autenticarUsuario(cpf, senha);
    }

}

module.exports = UserController