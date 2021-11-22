import {Schema, model } from 'mongoose'
import { Empleado } from '../classes/empleado'
import { empQuimico } from '../classes/quimico'
import { operarioTecnico } from '../classes/operarioTecnico'

// defino el schema de empleados
//schema pra importar datos de la base de datos
const EmpSchema = new Schema({
    _tipoEmpleado:{
        type: String
    },
    _cod:{
        type: String
    },
    _nombre:{
        type: String
    },
    _fechaIni:{
        type: Date
    },
    _sueldoBase:{
        type: Number
    },
    _formulas:{
        type: Number
        },
    _horasExtras:{
            type: Number,
            max:80
        }
})
export type savOpTecnico = {
    _tipoEmpleado: string|null,
    _cod: string|null,
    _nombre: string|null,
    _fechaIni: Date|null,
    _sueldoBase: number|null,
    _horasExtras: number|null
}
export type savEmpQuimico = {
    _tipoEmpleado: string|null,
    _cod: string|null,
    _nombre: string|null,
    _fechaIni: Date|null,
    _sueldoBase: number|null,
    _formulas: number|null
}

export const Emp = model ('empleados', EmpSchema)