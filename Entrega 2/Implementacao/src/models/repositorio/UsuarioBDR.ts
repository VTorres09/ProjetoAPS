import pool from "../../db/";

class UsuarioBDR {
    constructor() { }

    async inserirUsuario(cpf: string, password: string) {

        try {
            const query = `INSERT INTO users (cpf, password) 
            VALUES ($1, $2) RETURNING cpf`;

            const res = pool.query(query, [cpf, password])
            return res;
        } catch (err) {
            return err;
        }

    }

    async findUser(cpf: string, password: string) {
        const query = `SELECT cpf, password FROM users WHERE cpf = $1`;

        const result = await pool.query(query, [cpf])

        if (result.rows.length == 0) { return "user not found" }

        if (password == result.rows[0].password) return "found user"

        return "wrong password"
    }
}

module.exports = UsuarioBDR