const FabricaRepositorioBDR = require("./FabricaRepositorioBDR.ts")

class MapeadorFabrica {

    static mapearFabrica(tipoFabrica: string) {
        if (tipoFabrica == "BDR"){
            return new FabricaRepositorioBDR()
        }
    }

}

module.exports = MapeadorFabrica