const fachadaCozinha = require('./FachadaCozinha.ts')

class ComunicacaoCozinha {
    constructor() {}

    buscarIngredientes(alimento: string) {
        return fachadaCozinha.buscarIngredientes(alimento)
    }

}

module.exports = ComunicacaoCozinha;