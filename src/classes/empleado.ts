export class Empleado {
    private _cod: string;
    private _nombre: string;
    private _fechaIni: Date;
    private _sueldoBase: number;
    constructor(cod: string, nombre: string, fechaIni: Date,sueldoBase: number) {
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