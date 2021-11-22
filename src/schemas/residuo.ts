import {Schema, model } from 'mongoose'
import { Residuo } from '../classes/residuo'
import {Empleado} from '../classes/empleado'

const ResiSchema = new Schema ({
    _tipoResiduo:{
        type: String
    },
    _cod:{
        type: String
    },
    _peso:{
        type: Number
    },
    _fechaRecogida:{
        type: Date
    },
    _fechaEliminacion:{
        type: Date
    },
    _costeAlmacenamiento:{
        type: Number
    },
    _costeReciclaje:{
        type: Number
    },
    _descontaminacion:{
        type: Boolean,

    },
    _radiaccion:{
        type: String
    },
    _estado:{
        type: String
    },
    _explosivo:{
        type: Boolean
    }
})

//schema para cargar datos en la base de datos 

export type savRElectronico = {
    _tipoResiduo: string|null,
    _cod: string|null,
    _peso: number|null,
    _fechaRecogida: Date|null,
    _fechaEliminacion: Date|null,
    _descontaminacion: Boolean|null,
    _costeAlmacenamiento: number|null,
    _costeReciclaje: number|null
}
export type savRNuclear = {
    _tipoResiduo: string|null,
    _cod: string|null,
    _peso: number|null,
    _fechaRecogida: Date|null,
    _fechaEliminacion: Date|null,
    _radiaccion: string|null,
    _costeAlmacenamiento: number|null,
    _costeReciclaje: number|null
}
export type savRQuimico = {
    _tipoResiduo: string|null,
    _cod: string|null,
    _peso: number|null,
    _fechaRecogida: Date|null,
    _fechaEliminacion: Date|null,
    _estado: string|null,
    _explosivo: Boolean|null,
    _costeAlmacenamiento: number|null,
    _costeReciclaje: number|null
}

//schema para cargar datos de la base de datos 
export type sacaResiduo = {
    _tipoResiduo: string,
    _cod: string,
    _peso: number,
    _fechaRecogida: Date,
    _fechaEliminacion: Date,
    _costeAlmacenamiento: number,
    _costeReciclaje: number,
    _descontaminacion: Boolean,
    _estado: string,
    _explosivo: Boolean,
    _radiaccion: string,
}
export type sacaResiduoE = {
    _tipoResiduo: string,
    _cod: string,
    _peso: number,
    _fechaRecogida: Date,
    _fechaEliminacion: Date,
    _costeAlmacenamiento: number,
    _costeReciclaje: number,
    _descontaminacion: Boolean,
    _empleado:Empleado[],
    _estado: string,
    _explosivo: Boolean,
    _radiaccion: string,
}

export const Resi = model ('residuos ', ResiSchema)