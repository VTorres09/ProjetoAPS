const FabricaRepositorioBDR = require("./FabricaRepositorioBDR.ts")

class MapeadorFabrica {

    static mapearFabrica(tipoFabrica: string | undefined) {
        if (tipoFabrica == "BDR"){
            return new FabricaRepositorioBDR()
        }
        //return new dicionarioFabrica[tipoFabrica]()
    }

}

export default MapeadorFabrica