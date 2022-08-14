// import pool from "../../db/";

class PratoBDR {
    constructor() {}

    async inserirPrato
    (name: string, description: string, ingredients: string, calories: string)
    {
        console.log(
            `Preciso cadastrar no banco:
            name: ${name}
            description: ${description}
            ingredients: ${ingredients}
            calories: ${calories}`
        )
    }

}

module.exports = PratoBDR