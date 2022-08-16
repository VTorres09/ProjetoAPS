const fachadaClass = require('./Fachada')

class PratoController {

    constructor() { }

    cadastrarPrato
        (name: string, description: string, ingredients: string) {
        fachadaClass.cadastrarPrato(name, description, ingredients)
    }

    listarPratos() {
        return fachadaClass.listarPratos()
    }

    deletarPrato(id: number) {
        fachadaClass.deletarPrato(id)
    }


}

module.exports = PratoController