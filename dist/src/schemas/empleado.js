"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
const mongoose_1 = require("mongoose");
// defino el schema de empleados
//schema pra importar datos de la base de datos
const EmpSchema = new mongoose_1.Schema({
    _tipoEmpleado: {
        type: String
    },
    _cod: {
        type: String
    },
    _nombre: {
        type: String
    },
    _fechaIni: {
        type: Date
    },
    _sueldoBase: {
        type: Number
    },
    _formulas: {
        type: Number
    },
    _horasExtras: {
        type: Number,
        max: 80
    }
});
exports.Emp = (0, mongoose_1.model)('empleados', EmpSchema);
