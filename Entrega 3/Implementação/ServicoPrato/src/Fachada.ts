const CadastroPrato = require('../models/CadastroPrato')
const MapeadorFabrica = require("./FabricaRepositorio/MapeadorFabrica.ts")
const FabricaRepositorioAbstrata = require('./FabricaRepositorio/FabricaRepositorioAbstrata.ts')
require('dotenv').config()

class Fachada {

    fabricaConcreta : FabricaRepositorioAbstrata = MapeadorFabrica.mapearFabrica( process.env.TIPO_FABRICA );

    static cadastrarPrato
        (name: string, description: string, ingredients: string) {

        let cadastroPrato = new CadastroPrato(fabricaConcreta);

        cadastroPrato.cadastrarPrato(name, description, ingredients)

    }

    static async listarPratos() {

        let cadastroPrato = new CadastroPrato(fabricaConcreta);
        return await cadastroPrato.listarPratos()

    }

    static async deletarPrato(id: number) {

        let cadastroPrato = new CadastroPrato(fabricaConcreta);
        return await cadastroPrato.deletarPrato(id)

    }

    static async updatePrato(id: number, name: string, description: string) {

        let cadastroPrato = new CadastroPrato(fabricaConcreta);
        return await cadastroPrato.updatePrato(id, name, description)

    }

}

module.exports = Fachada;