import pool from "../db";
import Prato from "../entities/Prato";

class PratoBDR {
    constructor() { }

    async inserirPrato(prato: Prato) {
        try {
            const query = `INSERT INTO itens (name, description, calories) 
            VALUES ($1, $2, $3)`;

            const res = await pool.query(query, [prato.name, prato.description, prato.calories])

            if (res.rows.length == 0) return false

            else return true;
        } catch (err) {
            return err;
        }

    }

    async listarPratos() {
        try {
            const query = `SELECT id, name, description, calories FROM itens`;
            const res = await pool.query(query)

            return res.rows
        } catch (err) {
            return err;
        }
    }

    async deletarPrato(id: number) {
        try {
            const query = `DELETE FROM itens WHERE id = $1`;
            const res = await pool.query(query, [id])
            
            if (res.rows.length == 0) return false

            else return true;

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

            if (res.rows.length == 0) return false

            else return true;
        } catch (err) {
            return err;
        }
    }

}

export default PratoBDR;