const pool = require("../config/db");
class Profesor {
    static async findAll() {
        const result = await pool.query("SELECT * FROM profesores ORDER BY id ASC");
        return result.rows;
    }

    static async findById(id) {
        const result = await pool.query("SELECT * FROM profesores WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async create(nombre, departamento) {
        const result = await pool.query(
            "INSERT INTO profesores (nombre, departamento) VALUES ($1, $2) RETURNING *",
            [nombre, departamento]
        );
        return result.rows[0];
    }

    static async update(id, nombre, departamento) {
        const result = await pool.query(
            "UPDATE profesores SET nombre=$1, departamento=$2 WHERE id=$3 RETURNING *",
            [nombre, departamento, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query("DELETE FROM profesores WHERE id=$1 RETURNING *", [id]);
        return result.rows[0];
    }
}

export default Profesor;
