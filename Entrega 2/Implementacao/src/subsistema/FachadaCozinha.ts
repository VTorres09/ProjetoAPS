import fetch from 'node-fetch';

class FachadaCozinha {

    static async buscarIngredientes(alimento: string) {

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

}

module.exports = FachadaCozinha;

