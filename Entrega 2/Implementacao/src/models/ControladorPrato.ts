const fabricaRepositorioBDR = require('../models/repositorio/FabricaRepositorioBDR')
import Prato from './entities/Prato'
import PratoCollection from './collections/PratoCollection'

class ControladorPrato {

    // fabricaBDR : FabricaRepositorioBDR
    // pratoCollection:PratoCollection

    constructor() {
        // this.fabricaBDR = new fabricaRepositorioBDR()
    }

    cadastrarPrato
    (name: string, description: string, ingredients: string, calories: number, cpf: string)
    {
        const prato = new Prato(name, description, calories, cpf);
        const pratoCollection = new PratoCollection;
        pratoCollection.storePrato(prato)
        // let pratoBDR = this.fabricaBDR.criarRepositorioPrato();
        // pratoBDR.inserirPrato(prato);
    }
}

module.exports = ControladorPrato