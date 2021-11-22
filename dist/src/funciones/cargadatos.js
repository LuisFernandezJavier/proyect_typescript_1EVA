"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargadatos = void 0;
const database_1 = require("../database/database");
const residuo_1 = require("../schemas/residuo");
const entradaTeclado_1 = require("../util/entradaTeclado");
const resElectronico_1 = require("../classes/resElectronico");
const resQuimico_1 = require("../classes/resQuimico");
const resNuclear_1 = require("../classes/resNuclear");
const residuo_2 = require("../classes/residuo");
const empleado_1 = require("../classes/empleado");
const quimico_1 = require("../classes/quimico");
const operarioTecnico_1 = require("../classes/operarioTecnico");
const empleado_2 = require("../schemas/empleado");
const cargadatos = () => __awaiter(void 0, void 0, void 0, function* () {
    // asignaremos y cargaremos los documentos en memoria
    let sresiduo;
    let temporalResi = new residuo_2.Residuo("", 0, new Date(), new Date(), 0, 0);
    let temporalEmp = new empleado_1.Empleado("", "", new Date, 0);
    let query2;
    yield database_1.db.conectarBD();
    // Leemos un residuo en concreto
    let busca;
    busca = yield (0, entradaTeclado_1.leer)('cod del residuo que busca');
    let query = yield residuo_1.Resi.findOne({ _cod: busca });
    sresiduo = query;
    // Montamos el objeto para el residuo
    if (sresiduo._tipoResiduo == "Electronico") {
        temporalResi = new resElectronico_1.ResElectronico(sresiduo._cod, sresiduo._peso, sresiduo._fechaRecogida, sresiduo._fechaEliminacion, sresiduo._costeAlmacenamiento, sresiduo._costeReciclaje, sresiduo._descontaminacion);
    }
    else if (sresiduo._tipoResiduo == "Nuclear") {
        temporalResi = new resNuclear_1.ResNuclear(sresiduo._cod, sresiduo._peso, sresiduo._fechaRecogida, sresiduo._fechaEliminacion, sresiduo._costeAlmacenamiento, sresiduo._costeReciclaje, sresiduo._radiaccion);
    }
    else if (sresiduo._tipoResiduo == "Quimico") {
        temporalResi = new resQuimico_1.ResQuimico(sresiduo._cod, sresiduo._peso, sresiduo._fechaRecogida, sresiduo._fechaEliminacion, sresiduo._costeAlmacenamiento, sresiduo._costeReciclaje, sresiduo._estado, sresiduo._explosivo);
    }
    console.log(temporalResi);
    //asignamos empleado a su residuo
    query2 = yield empleado_2.Emp.findOne({ _cod: busca });
    if (query2._tipoEmpleado == "operarioTecnico") {
        temporalEmp = new operarioTecnico_1.operarioTecnico(query2._cod, query2._nombre, query2._fechaIni, query2._sueldoBase, query2._horasExtra);
    }
    else if (query2._tipoEmpleado == "Quimico") {
        temporalEmp = new quimico_1.empQuimico(query2._cod, query2._nombre, query2._fechaIni, query2._sueldoBase, query2._formulas);
    }
    temporalResi.addEmpleado(temporalEmp);
    console.log(`Bueno:`, temporalResi, temporalResi.costeResiduo());
});
exports.cargadatos = cargadatos;
