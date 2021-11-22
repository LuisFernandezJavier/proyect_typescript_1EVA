"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operarioTecnico = void 0;
const empleado_1 = require("./empleado");
class operarioTecnico extends empleado_1.Empleado {
    constructor(cod, nombre, fechaIni, sueldoBase, horasExtra) {
        super(cod, nombre, fechaIni, sueldoBase);
        this._horasExtra = horasExtra;
    }
    get horasExtra() {
        return this._horasExtra;
    }
}
exports.operarioTecnico = operarioTecnico;
