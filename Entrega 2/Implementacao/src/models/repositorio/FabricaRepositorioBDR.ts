const UsuarioBDR = require('./UsuarioBDR.ts')
const PratoBDRClass = require('./PratoBDR.ts')
const IFabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata')

class FabricaRepositorioBDR extends IFabricaRepositorioAbstrata {

    constructor () {
        super();
    }

    criarRepositorioUsuario() {
        return new UsuarioBDR();
    }

    criarRepositorioPrato() {
        return new PratoBDRClass();
    }

}

module.exports = FabricaRepositorioBDR