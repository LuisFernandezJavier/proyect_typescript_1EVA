"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResQuimico = void 0;
const residuo_1 = require("./residuo");
class ResQuimico extends residuo_1.Residuo {
    constructor(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje, estado, explosivo) {
        super(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje);
        this._estado = estado;
        this._explosivo = explosivo;
    }
    get estado() {
        return this._estado;
    }
    get explosivo() {
        return this._explosivo;
    }
    costeResiduo() {
        let costeresiduo;
        costeresiduo = super.costeResiduo();
        if (this._estado === "solido") {
            costeresiduo += 0.08 * costeresiduo;
        }
        if (this._explosivo === true) {
            costeresiduo += 0.12 * costeresiduo;
        }
        return costeresiduo;
    }
}
exports.ResQuimico = ResQuimico;
