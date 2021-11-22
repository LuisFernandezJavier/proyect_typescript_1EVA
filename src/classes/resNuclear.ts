import { Residuo } from './residuo';
export class ResNuclear extends Residuo{
    private _radiaccion: string;
    constructor(cod: string,peso: number, fechaRecogida:Date, fechaEliminacion:Date,costeAlmacenamiento:number,costeReciclaje:number,radiaccion: string){
    super(cod,peso, fechaRecogida,fechaEliminacion,costeAlmacenamiento,costeReciclaje)
    this._radiaccion = radiaccion;
    }
    get radiaccion(){
        return this._radiaccion;
    }
costeResiduo(): number {
        let costeresiduo: number;
        costeresiduo= super.costeResiduo();
        if (this._radiaccion === "alfa"){
            costeresiduo += 0.10*costeresiduo
        }
        else if (this._radiaccion === "beta"){
            costeresiduo += 0.15*costeresiduo
        }
        else if (this._radiaccion === "gamma"){
            costeresiduo += 0.21*costeresiduo
        }
        return costeresiduo
    }
}
