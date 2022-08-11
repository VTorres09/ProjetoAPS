import pool from "../../db/";

class UsuarioBDR {
    constructor() {}
    async inserirUsuario(cpf: string, nome: string) {
        console.log(cpf, nome)
        const query = `INSERT INTO users (cpf, password) 
            VALUES ($1, $2) RETURNING cpf`;
        await pool.query(query, [cpf, nome])
    }
}

module.exports = UsuarioBDR