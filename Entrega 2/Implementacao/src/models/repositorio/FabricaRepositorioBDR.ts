const UsuarioBDR = require('./UsuarioBDR.ts')
const IFabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata')

class FabricaRepositorioBDR extends IFabricaRepositorioAbstrata {

    constructor () {
        super();
    }

    criarRepositorioUsuario() {
        return new UsuarioBDR();
    }

}

module.exports = FabricaRepositorioBDR