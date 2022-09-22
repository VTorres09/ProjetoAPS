const CadastroPrato = require('./CadastroPrato')
import MapeadorFabricaInst from "./FabricaRepositorio/MapeadorFabrica"
const FabricaRepositorioAbstrata = require('./FabricaRepositorio/FabricaRepositorioAbstrata.ts')
require('dotenv').config()

const fabricaConcreta : FabricaRepositorioAbstrata = MapeadorFabricaInst.mapearFabrica( process.env.TIPO_FABRICA );

class Fachada {

    static async getIngredientes () {
        // const externalAPIUrl = `https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${alimento}`

        // const externalAPIResponse = await fetch(externalAPIUrl).then((res: { json: () => any; }) => res.json())
       
        const mockResponse = [
            {
                "id": {
                    "timestamp": 1594720331,
                    "date": "2020-07-14T09:52:11.000+00:00"
                },
                "descricao": "Frango/Galinha",
                "quantidade": "1/2 frango(334g)",
                "calorias": "731 kcal"
            },
            {
                "id": {
                    "timestamp": 1594721235,
                    "date": "2020-08-14T09:52:11.000+00:00"
                },
                "descricao": "Batata/Frango",
                "quantidade": "1/2 frango(668g)",
                "calorias": "200 kcal"
            },
            {
                "id": {
                    "timestamp": 1594721445,
                    "date": "2020-07-14T09:52:11.000+00:00"
                },
                "descricao": "Estrogonofe",
                "quantidade": "1/2 frango(334g)",
                "calorias": "1134 kcal"
            }
        ]

        return mockResponse
    }

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