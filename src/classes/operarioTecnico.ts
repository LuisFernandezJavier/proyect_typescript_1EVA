import { Empleado } from './empleado';
export class operarioTecnico extends Empleado {
private _horasExtra: number; 
constructor(cod: string, nombre: string, fechaIni: Date,sueldoBase: number,horasExtra: number){
    super(cod,nombre,fechaIni,sueldoBase)
    this._horasExtra = horasExtra;  
}
get horasExtra(){
    return this._horasExtra;
}
}