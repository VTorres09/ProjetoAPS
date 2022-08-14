const fachadaCozinha = require('./FachadaCozinha.ts')

class ComunicacaoCozinha {
    constructor() {}

    async buscarIngredientes(alimento: string) {

        return await fachadaCozinha.buscarIngredientes(alimento)
    }

}

module.exports = ComunicacaoCozinha;