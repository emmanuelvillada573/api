const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

app.use(express.json());

// Configuración de conexión (desde variables de entorno)
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Rutas
app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

app.get("/notas", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM notas ORDER BY id ASC");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// (Aquí van el resto de rutas CRUD como te mostré antes...)

app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`);
});
