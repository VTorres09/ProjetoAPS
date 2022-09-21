const FabricaRepositorioAbstrata = require('./FabricaRepositorio/FabricaRepositorioAbstrata.ts')
import Ingrediente from './models/entities/Ingrediente';
import Prato from './models/entities/Prato';

class CadastroPrato {

    fabrica: FabricaRepositorioAbstrata;

    constructor(fabricaConcreta : FabricaRepositorioAbstrata) {
        this.fabrica = fabricaConcreta
    }

    async cadastrarPrato
        (name: string, description: string, ingredients: Array<Ingrediente>) {
        var total_calories = 0;

        for (var i = 0; i < ingredients.length; i++) {
            total_calories += ingredients[i].calories;
        }

        const prato = new Prato(name, description, total_calories);
        const pratoBDR : any = this.fabrica.criarRepositorioPrato();
        return await pratoBDR.inserirPrato(prato);
    }

    async listarPratos() {
        const pratoBDR : any = this.fabrica.criarRepositorioPrato();
        return await pratoBDR.listarPratos();
    }

    async deletarPrato(id: number) {
        const pratoBDR : any = this.fabrica.criarRepositorioPrato();
        return await pratoBDR.deletarPrato(id);
    }

    async updatePrato(id: number, name: string, description: string) {
        const pratoBDR : any = this.fabrica.criarRepositorioPrato();
        return await pratoBDR.updatePrato(id,name,description);
    }
}

module.exports = CadastroPrato