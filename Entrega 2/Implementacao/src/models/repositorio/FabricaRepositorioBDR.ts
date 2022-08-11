const UsuarioBDRClass = require('./UsuarioBDR.ts')
const IFabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata')

class FabricaRepositorioBDR extends IFabricaRepositorioAbstrata {

    constructor () {
        super();
    }

    criarRepositorioUsuario() {
        return new UsuarioBDRClass();
    }

}

module.exports = FabricaRepositorioBDR