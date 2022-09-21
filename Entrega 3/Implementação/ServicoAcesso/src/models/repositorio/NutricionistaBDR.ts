import pool from "../db";
import Nutricionista from "../entities/Nutricionista";

class NutricionistaBDR {
    constructor() { }


    async storeUser(nutricionista: Nutricionista) {

        try {
            const query = `INSERT INTO users (cpf, password) 
            VALUES ($1, $2) RETURNING cpf`;

            const res = pool.query(query, [nutricionista.cpf, nutricionista.senha])
            return res;
        } catch (err) {
            return err;
        }

    }

    async authenticateUser(nutricionista: Nutricionista) {

        try {
            const query = `SELECT cpf, password FROM users WHERE cpf = $1`;

            const result = await pool.query(query, [nutricionista.cpf])

            if (result.rows.length == 0) { return "nutricionista not found" }

            if (nutricionista.senha == result.rows[0].password) return "found user";

            return "wrong password";

        } catch (err) {
            return err;
        }

    }
}

export default NutricionistaBDR