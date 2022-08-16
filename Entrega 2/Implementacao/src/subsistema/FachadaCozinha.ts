import fetch from 'node-fetch';

class FachadaCozinha {

    static async buscarIngredientes(alimento: string) {

        const externalAPIUrl = `https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${alimento}`

        const externalAPIResponse = await fetch(externalAPIUrl).then((res: { json: () => any; }) => res.json())
        const mockResponse = [
            {
                "id": {
                    "timestamp": 1594720331,
                    "date": "2020-07-14T09:52:11.000+00:00"
                },
                "descricao": "Frango/Galinha",
                "quantidade": "1/2 frango(334g)",
                "calorias": "731 kcal"
            }
        ]

        return JSON.stringify(mockResponse)
    }

}

module.exports = FachadaCozinha;

