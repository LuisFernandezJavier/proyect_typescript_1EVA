import { Residuo } from './residuo';
export class ResElectronico extends Residuo{
    private _descontaminacion: Boolean;
    constructor(cod: string,peso: number, fechaRecogida:Date, fechaEliminacion:Date,costeAlmacenamiento:number,costeReciclaje:number,descontaminacion: Boolean){
    super(cod,peso, fechaRecogida,fechaEliminacion,costeAlmacenamiento,costeReciclaje)
    this._descontaminacion= descontaminacion;
    }
    get descontaminacion(){
        return this._descontaminacion;
    }
    costeResiduo(): number {
        let costeresiduo: number;
        costeresiduo= super.costeResiduo();
        if (this._descontaminacion == true){
            costeresiduo += 0.18*costeresiduo
        }
        return costeresiduo
    }
}