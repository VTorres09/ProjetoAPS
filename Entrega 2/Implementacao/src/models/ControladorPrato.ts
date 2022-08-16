const fabricaRepositorioBDR = require('../models/repositorio/FabricaRepositorioBDR')
import PratoCollection from './collections/PratoCollection';
import Ingrediente from './entities/Ingrediente';
import Prato from './entities/Prato';

class ControladorPrato {

    pratoCollection: PratoCollection

    constructor() {
        this.pratoCollection = new PratoCollection;
    }

    cadastrarPrato
        (name: string, description: string, ingredients: Array<Ingrediente>) {
        var total_calories = 0;

        for (var i = 0; i < ingredients.length; i++) {
            total_calories += ingredients[i].calories;
        }

        const prato = new Prato(name, description, total_calories);

        this.pratoCollection.storePrato(prato)
    }

    async listarPratos() {
        return await this.pratoCollection.listPratos()
    }

    async deletarPrato(id: number) {
        return await this.pratoCollection.deletarPrato(id)
    }

    async updatePrato(id: number, name: string, description: string) {
        return await this.pratoCollection.updatePrato(id, name, description)
    }
}

module.exports = ControladorPrato