import pool from "../../db/";
import Prato from "../entities/Prato";

class PratoBDR {
    constructor() { }

    async inserirPrato(prato: Prato) {
        try {
            const query = `INSERT INTO itens (nutritionist_id, name, description, calories) 
            VALUES ($1, $2, $3, $4) RETURNING cpf`;

            const res = await pool.query(query, ["1", prato.name, prato.description, prato.calories])
            return res;
        } catch (err) {
            return err;
        }

    }

    async listarPratos() {
        try {
            const query = `SELECT id, name, description, calories FROM TABLE itens`;
            const res = await pool.query(query, [])

            return res;
        } catch (err) {
            return err;
        }
    }

    async deletarPrato(id: number) {
        try {
            const query = `DELETE FROM TABLE itens WHERE id = $1`;
            const res = await pool.query(query, [id])

            return res;
        } catch (err) {
            return err;
        }
    }

    async updatePrato(id: number, name: string, description: string) {
        try {
            const query = `UPDATE itens
            SET name = $2, description = $3
            WHERE id = $1`;

            const res = pool.query(query, [id, name, description])

            return res;
        } catch (err) {
            return err;
        }
    }

}

export default PratoBDR;