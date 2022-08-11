const FabricaRepositorioBDRClass = require('../models/repositorio/FabricaRepositorioBDR')

class ControladorUsuario {

    fabricaBDR : FabricaRepositorioBDR

    constructor() {
        this.fabricaBDR = new FabricaRepositorioBDRClass()
    }

    cadastrarUsuario(cpf: string, nome: string) {

        let usuarioBDR = this.fabricaBDR.criarRepositorioUsuario()

        usuarioBDR.inserirUsuario(cpf, nome);

    }
}

module.exports = ControladorUsuario