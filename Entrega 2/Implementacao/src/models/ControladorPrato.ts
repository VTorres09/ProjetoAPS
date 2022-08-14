const fabricaRepositorioBDR = require('../models/repositorio/FabricaRepositorioBDR')

class ControladorPrato {

    fabricaBDR : FabricaRepositorioBDR

    constructor() {
        this.fabricaBDR = new fabricaRepositorioBDR()
    }

    cadastrarPrato
    (name: string, description: string, ingredients: string, calories: string)
    {

        let pratoBDR = this.fabricaBDR.criarRepositorioPrato();

        pratoBDR.inserirPrato(name, description, ingredients, calories);

    }
}

module.exports = ControladorPrato