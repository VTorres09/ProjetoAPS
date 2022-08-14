const fachadaClass = require('./Fachada')

class PratoController {

    constructor() {}

    cadastrarPrato
    (name: string, description: string, ingredients: string, calories: string) {
         fachadaClass.cadastrarPrato(name, description, ingredients, calories)
    }

}

module.exports = PratoController