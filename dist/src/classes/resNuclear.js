"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResNuclear = void 0;
const residuo_1 = require("./residuo");
class ResNuclear extends residuo_1.Residuo {
    constructor(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje, radiaccion) {
        super(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje);
        this._radiaccion = radiaccion;
    }
    get radiaccion() {
        return this._radiaccion;
    }
    costeResiduo() {
        let costeresiduo;
        costeresiduo = super.costeResiduo();
        if (this._radiaccion === "alfa") {
            costeresiduo += 0.10 * costeresiduo;
        }
        else if (this._radiaccion === "beta") {
            costeresiduo += 0.15 * costeresiduo;
        }
        else if (this._radiaccion === "gamma") {
            costeresiduo += 0.21 * costeresiduo;
        }
        return costeresiduo;
    }
}
exports.ResNuclear = ResNuclear;
