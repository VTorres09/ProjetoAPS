const PratoBDR = require('../PratoBDR.ts')
const IFabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata')

class FabricaRepositorioBDR extends IFabricaRepositorioAbstrata {

    constructor () {
        super();
    }

    criarRepositorioPrato() {
        return new PratoBDR();
    }

}

module.exports = FabricaRepositorioBDR