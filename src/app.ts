import express from "express";
const profesoresRoutes = require("./routes/profesores.routes");

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/profesores", profesoresRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API de Ranking de Profesores funcionando 🚀");
});

module.exports = app;
