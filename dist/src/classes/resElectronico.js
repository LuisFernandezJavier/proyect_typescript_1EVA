"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResElectronico = void 0;
const residuo_1 = require("./residuo");
class ResElectronico extends residuo_1.Residuo {
    constructor(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje, descontaminacion) {
        super(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje);
        this._descontaminacion = descontaminacion;
    }
    get descontaminacion() {
        return this._descontaminacion;
    }
    costeResiduo() {
        let costeresiduo;
        costeresiduo = super.costeResiduo();
        if (this._descontaminacion == true) {
            costeresiduo += 0.18 * costeresiduo;
        }
        return costeresiduo;
    }
}
exports.ResElectronico = ResElectronico;
