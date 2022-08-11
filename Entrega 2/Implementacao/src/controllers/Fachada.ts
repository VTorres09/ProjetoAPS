const ControladorUsuarioClass = require('../models/ControladorUsuario')

class Fachada {
    static cadastrarUsuario(cpf: string, senha: string) {
        
        let controladorUsuario = new ControladorUsuarioClass();

        controladorUsuario.cadastrarUsuario(cpf, senha);

    }
}

module.exports = Fachada;