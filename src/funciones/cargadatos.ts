import { db } from '../database/database';
import {savRNuclear,savRQuimico,savRElectronico,Resi,sacaResiduo,sacaResiduoE} from '../schemas/residuo';
import { leer } from "../util/entradaTeclado";
import {ResElectronico} from '../classes/resElectronico';
import {ResQuimico} from "../classes/resQuimico";
import {ResNuclear} from "../classes/resNuclear";
import {Residuo} from "../classes/residuo"
import { Empleado } from '../classes/empleado'
import { empQuimico } from '../classes/quimico'
import { operarioTecnico } from '../classes/operarioTecnico'
import {savOpTecnico,savEmpQuimico,Emp} from '../schemas/empleado'

export const cargadatos = async () =>{
    // asignaremos y cargaremos los documentos en memoria
    let sresiduo: sacaResiduo
    let temporalResi: Residuo = new Residuo("",0,new Date(),new Date(),0,0)
    let temporalEmp: Empleado = new Empleado("","",new Date,0)
    let query2: any
    await db.conectarBD()
  
    // Leemos un residuo en concreto
    let busca :string
    busca = await leer('cod del residuo que busca')
    let query: any =  await Resi.findOne({_cod:busca})
    sresiduo = query
  
    // Montamos el objeto para el residuo
  
    if (sresiduo._tipoResiduo == "Electronico"){
      temporalResi = new ResElectronico(sresiduo._cod, sresiduo._peso,sresiduo._fechaRecogida,sresiduo._fechaEliminacion,sresiduo._costeAlmacenamiento,sresiduo._costeReciclaje,sresiduo._descontaminacion)
    }else if (sresiduo._tipoResiduo == "Nuclear"){
      temporalResi = new ResNuclear(sresiduo._cod, sresiduo._peso,sresiduo._fechaRecogida,sresiduo._fechaEliminacion,sresiduo._costeAlmacenamiento,sresiduo._costeReciclaje,sresiduo._radiaccion)
    }else if (sresiduo._tipoResiduo == "Quimico"){
        temporalResi = new ResQuimico(sresiduo._cod, sresiduo._peso,sresiduo._fechaRecogida,sresiduo._fechaEliminacion,sresiduo._costeAlmacenamiento,sresiduo._costeReciclaje,sresiduo._estado,sresiduo._explosivo)
    }
    console.log(temporalResi)

  
 
    //asignamos empleado a su residuo
    query2 = await Emp.findOne({_cod:busca})
    if (query2._tipoEmpleado == "operarioTecnico"){
        temporalEmp = new operarioTecnico(query2._cod, query2._nombre, 
            query2._fechaIni,query2._sueldoBase,query2._horasExtra)  
    }else if (query2._tipoEmpleado == "Quimico") {
        temporalEmp = new empQuimico(query2._cod,query2._nombre, 
            query2._fechaIni,query2._sueldoBase,query2._formulas )
    }
    

  
    temporalResi.addEmpleado(temporalEmp)
    
    console.log(`Bueno:` , temporalResi , temporalResi.costeResiduo())
}



  