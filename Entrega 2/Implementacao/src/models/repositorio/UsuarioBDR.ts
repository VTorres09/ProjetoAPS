import pool from "../../db/";

class UsuarioBDR {
    constructor() {}

    async inserirUsuario(cpf: string, password: string) {
        const query = `INSERT INTO users (cpf, password) 
            VALUES ($1, $2) RETURNING cpf`;
        await pool.query(query, [cpf, password])
    }

    async findUser(cpf: string, password: string) {
        const query = `SELECT cpf, password FROM users WHERE cpf = $1`;
        
        const result = await pool.query(query, [cpf])

        if(result.rows.length == 0){return "user not found"} 

        if(password == result.rows[0].password) return "found user"

        return "wrong password"
    }
}

module.exports = UsuarioBDR