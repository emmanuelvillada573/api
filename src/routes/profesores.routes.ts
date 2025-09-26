import express from "express";
const router = express.Router();
const profesorCtrl = require("../controllers/profesores.controller");

// CRUD de profesores
router.get("/", profesorCtrl.listarProfesores);
router.get("/:id", profesorCtrl.obtenerProfesor);
router.post("/", profesorCtrl.crearProfesor);
router.put("/:id", profesorCtrl.actualizarProfesor);
router.delete("/:id", profesorCtrl.eliminarProfesor);

module.exports = router;
