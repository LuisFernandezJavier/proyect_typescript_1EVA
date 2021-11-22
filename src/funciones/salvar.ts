import { db } from '../database/database';
import {savRNuclear,savRQuimico,savRElectronico,Resi} from '../schemas/residuo';
import { leer } from "../util/entradaTeclado";
import {ResElectronico} from '../classes/resElectronico';
import {ResQuimico} from "../classes/resQuimico";
import {ResNuclear} from "../classes/resNuclear";
import {Residuo} from "../classes/residuo"
import { Empleado } from '../classes/empleado'
import { empQuimico } from '../classes/quimico'
import { operarioTecnico } from '../classes/operarioTecnico'
import {savOpTecnico,savEmpQuimico,Emp} from '../schemas/empleado'





let residuos: Array<Residuo> = new Array<Residuo>();

export const nuevoResElectronico = async() => {
    let residuoe: ResElectronico;
    const cod = await leer ('codigo identificativo')
    const peso =  parseInt(await leer('peso del lote residuo'))
    const fechaRecogida = new Date(await leer('fecha en la que llega a la planta(año-mes-dia)'))
    const fechaEliminacion = new Date(await leer('fecha en la que se elimina el residuo(año-mes-dia)'))
    const descontaminacion = Boolean(await leer('necesita descontaminacion(true , vacío es false)'))
    console.log(descontaminacion)
    const costeAlmacenamiento = parseInt(await leer('coste de almacenamiento'))
    const costeReciclaje = parseInt(await leer('coste de reciclaje'))
    residuoe = new ResElectronico (cod,peso,fechaRecogida,fechaEliminacion,costeAlmacenamiento,costeReciclaje,descontaminacion)
    residuos.push (residuoe)
}
export const nuevoResNuclear = async() => {
        let residuon: ResNuclear;
        const cod = await leer ('codigo identificativo')
        const peso =  parseInt(await leer('peso del lote residuo'))
        const fechaRecogida = new Date(await leer('fecha en la que llega a la planta(año-mes-dia)'))
        const fechaEliminacion = new Date(await leer('fecha en la que se elimina el residuo (año-mes-dia)'))
        const radiaccion = await leer('tipo de radiaccion(alfa,beta,gamma)')
        const costeAlmacenamiento = parseInt(await leer('coste de almacenamiento'))
        const costeReciclaje = parseInt(await leer('coste de reciclaje'))
        residuon = new ResNuclear (cod,peso,fechaRecogida,fechaEliminacion,costeAlmacenamiento,costeReciclaje,radiaccion)
        residuos.push (residuon)
}
export const nuevoResQuimico = async() => {
        let residuoq: ResQuimico;
        const cod = await leer ('codigo identificativo')
        const peso =  parseInt(await leer('peso del lote residuo'))
        const fechaRecogida = new Date(await leer('fecha en la que llega a la planta(año-mes-dia)'))
        const fechaEliminacion = new Date(await leer('fecha en la que se elimina el residuo(año-mes-dia)'))
        const estado = await leer('estado del residuo(solido,liquido)')
        const explosivo = Boolean(await leer('es explosivo el residuo (true,vacio es false)'))
        const costeAlmacenamiento = parseInt(await leer('coste de almacenamiento'))
        const costeReciclaje = parseInt(await leer('coste de reciclaje'))
        residuoq = new ResQuimico (cod,peso,fechaRecogida,fechaEliminacion,costeAlmacenamiento,costeReciclaje,estado,explosivo,)
        residuos.push (residuoq)
}

// declaro schema donde voy a introducir el objeto q crea el usuario
let ERschema: any 

//declaro schema compatible con la clase
let ElRSchema: savRElectronico = {
        _tipoResiduo: null,
        _cod: null,
        _peso: null,
        _fechaRecogida: null,
        _fechaEliminacion: null,
        _descontaminacion: null,
        _costeAlmacenamiento: null,
        _costeReciclaje: null
}

//declaro schema compatible con la clase
let NuRSchema: savRNuclear ={
        _tipoResiduo: null,
        _cod: null,
        _peso: null,
        _fechaRecogida: null,
        _fechaEliminacion: null,
        _radiaccion: null,
        _costeAlmacenamiento: null,
        _costeReciclaje: null
}

//declaro schema compatible con la clase
let QuiRSchema: savRQuimico ={
        _tipoResiduo: null,
        _cod: null,
        _peso: null,
        _fechaRecogida: null,
        _fechaEliminacion: null,
        _estado: null,
        _explosivo: null,
        _costeAlmacenamiento: null,
        _costeReciclaje: null
}


export const salvar = async () =>{

await db.conectarBD()
for (let a of residuos){
    ElRSchema._cod = NuRSchema._cod = QuiRSchema._cod = a.cod 
    ElRSchema._peso = NuRSchema._peso = QuiRSchema._peso = a.peso 
    ElRSchema._fechaRecogida = NuRSchema._fechaRecogida = QuiRSchema._fechaRecogida = a.fechaRecogida 
    ElRSchema._fechaEliminacion = NuRSchema._fechaEliminacion = QuiRSchema._fechaEliminacion = a.fechaEliminacion 
    ElRSchema._costeAlmacenamiento = NuRSchema._costeAlmacenamiento = QuiRSchema._costeAlmacenamiento = a.costeAlmacenamiento 
    ElRSchema._costeReciclaje = NuRSchema._costeReciclaje = QuiRSchema._costeReciclaje = a.costeReciclaje
    

    if (a instanceof ResElectronico){
       /* if (a.descontaminacion != "si") {
                console.log("error asegurese seguir las pautas de valor de dato")
        } else if (a.descontaminacion !=="no"){
                console.log("error asegurese seguir las pautas de valor de dato")  
        }*/
        ElRSchema._tipoResiduo = "Electronico"
        ElRSchema._descontaminacion = a.descontaminacion
        ERschema = new Resi (ElRSchema)}
        else if (a instanceof ResNuclear){
        NuRSchema._tipoResiduo = "Nuclear"
        NuRSchema._radiaccion = a.radiaccion
        ERschema= new Resi (NuRSchema)
        }
        else if (a instanceof ResQuimico){
        QuiRSchema._tipoResiduo = "Quimico"
        QuiRSchema._estado = a.estado
        QuiRSchema._explosivo = a.explosivo
        ERschema = new Resi (QuiRSchema)
        }
        await ERschema.save()
        .then(() => console.log('Documento guardado correctamente') )
        .catch( (err: any) => console.log('Error: '+err))
}
await db.desconectarBD()
}


let empleados: Array<Empleado> = new Array<Empleado>();

export const nuevoOpTecnico = async() => {
    let empOperario: operarioTecnico;
    const cod = await leer ('codigo identificativo')
    const nombre = await leer ('nombre del empleado')
    const fechaIni = new Date (await leer('fecha del inicio de contrato del empleado'))
    const sueldoBase = parseInt (await leer('sueldo base del empleado'))
    const horasExtra = parseInt (await leer('horas extra que ha hecho el empleado el ultimo año'))
    empOperario = new operarioTecnico (cod,nombre,fechaIni,sueldoBase,horasExtra)
    empleados.push (empOperario)
}

export const nuevoQuimico = async() => {
    let empQuimi: empQuimico;
    const cod = await leer ('codigo identificativo')
    const nombre = await leer ('nombre del empleado')
    const fechaIni = new Date (await leer('fecha del inicio de contrato del empleado'))
    const sueldoBase = parseInt (await leer('sueldo base del empleado'))
    const formulas = parseInt(await leer('nuevas formulas creadas por el empleado quimico'))
    empQuimi = new empQuimico (cod,nombre,fechaIni,sueldoBase,formulas)
    empleados.push (empQuimi)
}

// declaro schema donde voy a introducir el objeto q crea el usuario
let EMPschema: any 

//declaro schema compatible con la clase
let OPESchema: savOpTecnico = {
    _tipoEmpleado:null,
    _cod:null,
    _nombre:null,
    _fechaIni:null,
    _sueldoBase:null,
    _horasExtras:null
}

//declaro schema compatible con la clase
let QUISchema: savEmpQuimico = {
    _tipoEmpleado:null,
    _cod:null,
    _nombre:null,
    _fechaIni:null,
    _sueldoBase:null,
    _formulas:null
}

//

export const salvar2 = async () =>{ 
    await db.conectarBD()
    for (let a of empleados){
        QUISchema._cod = OPESchema._cod = a.cod 
        QUISchema._nombre = OPESchema._nombre = a.nombre
        QUISchema._fechaIni = OPESchema._fechaIni = a.fechaIni
        QUISchema._sueldoBase = OPESchema._sueldoBase= a.sueldoBase

        if (a instanceof operarioTecnico){
            OPESchema._tipoEmpleado = "operarioTecnico"
            OPESchema._horasExtras = a.horasExtra
            EMPschema= new Emp (OPESchema)
        } else if (a instanceof empQuimico ){
            QUISchema._tipoEmpleado = "Quimico"
            QUISchema._formulas = a.formulas
            EMPschema= new Emp (QUISchema)
        }
        await EMPschema.save()
        .then(() => console.log('Documento guardado correctamente') )
        .catch( (err: any) => console.log('Error: '+err))
    } 
    await db.desconectarBD()
}