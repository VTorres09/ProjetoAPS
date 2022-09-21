import NutricionistaBDR from "../models/repositorio/NutricionistaBDR";
const IFabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata')

class FabricaRepositorioBDR extends IFabricaRepositorioAbstrata {

    constructor () {
        super();
    }

    criarRepositorioNutricionista () : NutricionistaBDR {
        return new NutricionistaBDR();
    }

}

module.exports = FabricaRepositorioBDR