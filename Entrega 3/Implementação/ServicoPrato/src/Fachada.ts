const CadastroPrato = require('./CadastroPrato')
import MapeadorFabricaInst from "./FabricaRepositorio/MapeadorFabrica"
const FabricaRepositorioAbstrata = require('./FabricaRepositorio/FabricaRepositorioAbstrata.ts')
require('dotenv').config()

const fabricaConcreta : FabricaRepositorioAbstrata = MapeadorFabricaInst.mapearFabrica( process.env.TIPO_FABRICA );

class Fachada {

    static async cadastrarPrato
        (name: string, description: string, ingredients: string) {

        let cadastroPrato = new CadastroPrato(fabricaConcreta);

        return await cadastroPrato.cadastrarPrato(name, description, ingredients)

    }

    static async listarPratos() {

        console.log("chamou")

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

export default Fachada;