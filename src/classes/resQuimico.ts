import { Residuo } from './residuo';
export class ResQuimico extends Residuo{
    private _estado: string;
    private _explosivo:Boolean;
    constructor(cod: string,peso: number, fechaRecogida:Date, fechaEliminacion:Date,costeAlmacenamiento:number,costeReciclaje:number,estado:string,explosivo:Boolean){
    super(cod,peso, fechaRecogida,fechaEliminacion,costeAlmacenamiento,costeReciclaje)
    this._estado= estado;
    this._explosivo=explosivo;
    }
    get estado(){
        return this._estado;
    }
    get explosivo(){
        return this._explosivo;
    }
    costeResiduo(): number {
        let costeresiduo: number;
        costeresiduo= super.costeResiduo();
        if (this._estado === "solido"){
            costeresiduo += 0.08*costeresiduo
        }
        if (this._explosivo === true){
            costeresiduo += 0.12*costeresiduo
        }
        return costeresiduo
    }
}