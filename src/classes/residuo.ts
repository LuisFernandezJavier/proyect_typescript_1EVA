import { Empleado } from "./empleado";

export class Residuo {
    private _cod: string;
    private _peso: number;
    private _fechaRecogida: Date;
    private _fechaEliminacion: Date;
    private _empleado: Array<Empleado>
    private _costeAlmacenamiento: number;
    private _costeReciclaje: number;
    constructor(cod: string,peso: number, fechaRecogida:Date, fechaEliminacion:Date, costeAlmacenamiento:number , costeReciclaje:number){
        this._cod = cod;
        this._peso = peso;
        this._fechaRecogida = fechaRecogida;
        this._fechaEliminacion = fechaEliminacion;
        this._empleado = new Array<Empleado>();
        this._costeAlmacenamiento = costeAlmacenamiento;
        this._costeReciclaje = costeReciclaje;
    }
    get cod(){
        return this._cod;
    }
    get peso(){
        return this._peso;
    }
    get fechaRecogida(){
        return this._fechaRecogida;
    }
    get fechaEliminacion(){
        return this._fechaEliminacion;
    }
    get empleado(){
        return this._empleado;
    }
    get costeAlmacenamiento(){
        return this._costeAlmacenamiento;
    }
    get costeReciclaje(){
        return this._costeReciclaje;
    }

    costeResiduo(): number {
        let costeresiduo: number;
        let hoy : Date;
        let resta: number; 
        let costealmacena: number;
        hoy = new Date();
        resta = hoy.getTime() - this._fechaEliminacion.getTime()
        costealmacena = resta * this._costeAlmacenamiento
        

        costeresiduo= (this._costeReciclaje + costealmacena);
        return costeresiduo
    }
    public addEmpleado(empleado: Empleado) {
        this._empleado.push(empleado);
      }
}


