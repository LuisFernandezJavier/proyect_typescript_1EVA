"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empQuimico = void 0;
const empleado_1 = require("./empleado");
class empQuimico extends empleado_1.Empleado {
    constructor(cod, nombre, fechaIni, sueldoBase, formulas) {
        super(cod, nombre, fechaIni, sueldoBase);
        this._formulas = formulas;
    }
    get formulas() {
        return this._formulas;
    }
}
exports.empQuimico = empQuimico;
