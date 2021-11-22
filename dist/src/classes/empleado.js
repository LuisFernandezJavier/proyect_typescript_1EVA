"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(cod, nombre, fechaIni, sueldoBase) {
        this._cod = cod;
        this._nombre = nombre;
        this._fechaIni = fechaIni;
        this._sueldoBase = sueldoBase;
    }
    get cod() {
        return this._cod;
    }
    get nombre() {
        return this._nombre;
    }
    get fechaIni() {
        return this._fechaIni;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }
}
exports.Empleado = Empleado;
