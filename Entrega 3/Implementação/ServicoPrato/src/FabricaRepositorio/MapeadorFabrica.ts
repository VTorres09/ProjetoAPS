const FabricaRepositorioBDR = require("./FabricaRepositorioBDR.ts")

class MapeadorFabrica {

    static mapearFabrica( tipoFabrica: string | any ) {
        if (tipoFabrica == "BDR"){
            return new FabricaRepositorioBDR()
        }
    }

}

export default MapeadorFabrica