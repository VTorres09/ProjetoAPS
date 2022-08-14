import pool from "../../db/";
import Prato from "../entities/Prato";

class PratoBDR {
    constructor() {}

    async inserirPrato(prato:Prato){
        const query = `INSERT INTO itens (nutritionist_id, name, description, calories) 
        VALUES ($1, $2, $3, $4) RETURNING cpf`;
        await pool.query(query, ["1", prato.name, prato.description, prato.calories])

    }

    async listarPratos(){
        const query = `SELECT id, name, description, calories FROM TABLE itens`;
        await pool.query(query, [])
    }

    async deletarPrato(id:number){
        const query = `DELETE FROM TABLE itens WHERE id = $1`;
        await pool.query(query, [id])
    }

    async updatePrato(id:number, name:string, description:string){
        const query = `UPDATE itens
        SET name = $2, description = $3
        WHERE id = $1`;
        await pool.query(query, [id, name, description])
    }

}

export default PratoBDR;