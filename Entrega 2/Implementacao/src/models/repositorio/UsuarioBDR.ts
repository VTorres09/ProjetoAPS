import pool from "../../db/";
import User from "../entities/Usuario";

class UsuarioBDR {
    constructor() {}

    async storeUser(user: User) {
        const query = `INSERT INTO users (cpf, password) 
            VALUES ($1, $2) RETURNING cpf`;
        await pool.query(query, [user.cpf, user.senha])
    }

    async findUser(user: User) {
        const query = `SELECT cpf, password FROM users WHERE cpf = $1`;
        
        const result = await pool.query(query, [user.cpf])

        if(result.rows.length == 0){return "user not found"} 

        if(user.senha == result.rows[0].password) return "found user"

        return "wrong password"
    }

    async authenticateUser(user: User) {
        const query = `SELECT cpf, password FROM users WHERE cpf = $1`;
        
        const result = await pool.query(query, [user.cpf])

        if(result.rows.length == 0){return "user not found"}
        
        if(user.senha == result.rows[0].password) return "found user"

        return "wrong password"
    }

}

module.exports = UsuarioBDR