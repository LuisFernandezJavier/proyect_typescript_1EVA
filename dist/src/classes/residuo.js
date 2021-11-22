"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residuo = void 0;
class Residuo {
    constructor(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje) {
        this._cod = cod;
        this._peso = peso;
        this._fechaRecogida = fechaRecogida;
        this._fechaEliminacion = fechaEliminacion;
        this._empleado = new Array();
        this._costeAlmacenamiento = costeAlmacenamiento;
        this._costeReciclaje = costeReciclaje;
    }
    get cod() {
        return this._cod;
    }
    get peso() {
        return this._peso;
    }
    get fechaRecogida() {
        return this._fechaRecogida;
    }
    get fechaEliminacion() {
        return this._fechaEliminacion;
    }
    get empleado() {
        return this._empleado;
    }
    get costeAlmacenamiento() {
        return this._costeAlmacenamiento;
    }
    get costeReciclaje() {
        return this._costeReciclaje;
    }
    costeResiduo() {
        let costeresiduo;
        let hoy;
        let resta;
        let costealmacena;
        hoy = new Date();
        resta = hoy.getTime() - this._fechaEliminacion.getTime();
        costealmacena = resta * this._costeAlmacenamiento;
        costeresiduo = (this._costeReciclaje + costealmacena);
        return costeresiduo;
    }
    addEmpleado(empleado) {
        this._empleado.push(empleado);
    }
}
exports.Residuo = Residuo;
