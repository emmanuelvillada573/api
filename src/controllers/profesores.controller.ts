const Profesor = require("../models/profesor.model");
const errorHandler = require("../utils/errorHandler");

exports.listarProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.findAll();
        res.json(profesores);
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.obtenerProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.findById(req.params.id);
        if (!profesor) return res.status(404).json({ mensaje: "Profesor no encontrado" });
        res.json(profesor);
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.crearProfesor = async (req, res) => {
    try {
        const { nombre, departamento } = req.body;
        const nuevo = await Profesor.create(nombre, departamento);
        res.status(201).json(nuevo);
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.actualizarProfesor = async (req, res) => {
    try {
        const { nombre, departamento } = req.body;
        const actualizado = await Profesor.update(req.params.id, nombre, departamento);
        if (!actualizado) return res.status(404).json({ mensaje: "Profesor no encontrado" });
        res.json(actualizado);
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.eliminarProfesor = async (req, res) => {
    try {
        const eliminado = await Profesor.delete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: "Profesor no encontrado" });
        res.json({ mensaje: "Profesor eliminado" });
    } catch (err) {
        errorHandler(res, err);
    }
};
