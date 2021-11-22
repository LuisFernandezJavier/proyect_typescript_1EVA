import { Empleado } from './empleado';
export class empQuimico extends Empleado{
    private _formulas: number;
    constructor(cod: string, nombre: string, fechaIni: Date,sueldoBase: number,formulas:number){
        super(cod,nombre,fechaIni,sueldoBase)
        this._formulas=formulas;
    }
    get formulas(){
        return this._formulas;
    }
}