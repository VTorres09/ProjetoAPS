import PratoBDR from '../models/repositorio/PratoBDR'
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