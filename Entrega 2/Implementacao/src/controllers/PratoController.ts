const fachadaClass = require('./Fachada')

class PratoController {

    constructor() {}

    cadastrarPrato
    (name: string, description: string, ingredients: string, calories: number) {
         fachadaClass.cadastrarPrato(name, description, ingredients, calories)
    }

}

module.exports = PratoController