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
exports.salvar2 = exports.nuevoQuimico = exports.nuevoOpTecnico = exports.salvar = exports.nuevoResQuimico = exports.nuevoResNuclear = exports.nuevoResElectronico = void 0;
const database_1 = require("../database/database");
const residuo_1 = require("../schemas/residuo");
const entradaTeclado_1 = require("../util/entradaTeclado");
const resElectronico_1 = require("../classes/resElectronico");
const resQuimico_1 = require("../classes/resQuimico");
const resNuclear_1 = require("../classes/resNuclear");
const quimico_1 = require("../classes/quimico");
const operarioTecnico_1 = require("../classes/operarioTecnico");
const empleado_1 = require("../schemas/empleado");
let residuos = new Array();
const nuevoResElectronico = () => __awaiter(void 0, void 0, void 0, function* () {
    let residuoe;
    const cod = yield (0, entradaTeclado_1.leer)('codigo identificativo');
    const peso = parseInt(yield (0, entradaTeclado_1.leer)('peso del lote residuo'));
    const fechaRecogida = new Date(yield (0, entradaTeclado_1.leer)('fecha en la que llega a la planta(año-mes-dia)'));
    const fechaEliminacion = new Date(yield (0, entradaTeclado_1.leer)('fecha en la que se elimina el residuo(año-mes-dia)'));
    const descontaminacion = Boolean(yield (0, entradaTeclado_1.leer)('necesita descontaminacion(true , vacío es false)'));
    console.log(descontaminacion);
    const costeAlmacenamiento = parseInt(yield (0, entradaTeclado_1.leer)('coste de almacenamiento'));
    const costeReciclaje = parseInt(yield (0, entradaTeclado_1.leer)('coste de reciclaje'));
    residuoe = new resElectronico_1.ResElectronico(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje, descontaminacion);
    residuos.push(residuoe);
});
exports.nuevoResElectronico = nuevoResElectronico;
const nuevoResNuclear = () => __awaiter(void 0, void 0, void 0, function* () {
    let residuon;
    const cod = yield (0, entradaTeclado_1.leer)('codigo identificativo');
    const peso = parseInt(yield (0, entradaTeclado_1.leer)('peso del lote residuo'));
    const fechaRecogida = new Date(yield (0, entradaTeclado_1.leer)('fecha en la que llega a la planta(año-mes-dia)'));
    const fechaEliminacion = new Date(yield (0, entradaTeclado_1.leer)('fecha en la que se elimina el residuo (año-mes-dia)'));
    const radiaccion = yield (0, entradaTeclado_1.leer)('tipo de radiaccion(alfa,beta,gamma)');
    const costeAlmacenamiento = parseInt(yield (0, entradaTeclado_1.leer)('coste de almacenamiento'));
    const costeReciclaje = parseInt(yield (0, entradaTeclado_1.leer)('coste de reciclaje'));
    residuon = new resNuclear_1.ResNuclear(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje, radiaccion);
    residuos.push(residuon);
});
exports.nuevoResNuclear = nuevoResNuclear;
const nuevoResQuimico = () => __awaiter(void 0, void 0, void 0, function* () {
    let residuoq;
    const cod = yield (0, entradaTeclado_1.leer)('codigo identificativo');
    const peso = parseInt(yield (0, entradaTeclado_1.leer)('peso del lote residuo'));
    const fechaRecogida = new Date(yield (0, entradaTeclado_1.leer)('fecha en la que llega a la planta(año-mes-dia)'));
    const fechaEliminacion = new Date(yield (0, entradaTeclado_1.leer)('fecha en la que se elimina el residuo(año-mes-dia)'));
    const estado = yield (0, entradaTeclado_1.leer)('estado del residuo(solido,liquido)');
    const explosivo = Boolean(yield (0, entradaTeclado_1.leer)('es explosivo el residuo (true,vacio es false)'));
    const costeAlmacenamiento = parseInt(yield (0, entradaTeclado_1.leer)('coste de almacenamiento'));
    const costeReciclaje = parseInt(yield (0, entradaTeclado_1.leer)('coste de reciclaje'));
    residuoq = new resQuimico_1.ResQuimico(cod, peso, fechaRecogida, fechaEliminacion, costeAlmacenamiento, costeReciclaje, estado, explosivo);
    residuos.push(residuoq);
});
exports.nuevoResQuimico = nuevoResQuimico;
// declaro schema donde voy a introducir el objeto q crea el usuario
let ERschema;
//declaro schema compatible con la clase
let ElRSchema = {
    _tipoResiduo: null,
    _cod: null,
    _peso: null,
    _fechaRecogida: null,
    _fechaEliminacion: null,
    _descontaminacion: null,
    _costeAlmacenamiento: null,
    _costeReciclaje: null
};
//declaro schema compatible con la clase
let NuRSchema = {
    _tipoResiduo: null,
    _cod: null,
    _peso: null,
    _fechaRecogida: null,
    _fechaEliminacion: null,
    _radiaccion: null,
    _costeAlmacenamiento: null,
    _costeReciclaje: null
};
//declaro schema compatible con la clase
let QuiRSchema = {
    _tipoResiduo: null,
    _cod: null,
    _peso: null,
    _fechaRecogida: null,
    _fechaEliminacion: null,
    _estado: null,
    _explosivo: null,
    _costeAlmacenamiento: null,
    _costeReciclaje: null
};
const salvar = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    for (let a of residuos) {
        ElRSchema._cod = NuRSchema._cod = QuiRSchema._cod = a.cod;
        ElRSchema._peso = NuRSchema._peso = QuiRSchema._peso = a.peso;
        ElRSchema._fechaRecogida = NuRSchema._fechaRecogida = QuiRSchema._fechaRecogida = a.fechaRecogida;
        ElRSchema._fechaEliminacion = NuRSchema._fechaEliminacion = QuiRSchema._fechaEliminacion = a.fechaEliminacion;
        ElRSchema._costeAlmacenamiento = NuRSchema._costeAlmacenamiento = QuiRSchema._costeAlmacenamiento = a.costeAlmacenamiento;
        ElRSchema._costeReciclaje = NuRSchema._costeReciclaje = QuiRSchema._costeReciclaje = a.costeReciclaje;
        if (a instanceof resElectronico_1.ResElectronico) {
            /* if (a.descontaminacion != "si") {
                     console.log("error asegurese seguir las pautas de valor de dato")
             } else if (a.descontaminacion !=="no"){
                     console.log("error asegurese seguir las pautas de valor de dato")
             }*/
            ElRSchema._tipoResiduo = "Electronico";
            ElRSchema._descontaminacion = a.descontaminacion;
            ERschema = new residuo_1.Resi(ElRSchema);
        }
        else if (a instanceof resNuclear_1.ResNuclear) {
            NuRSchema._tipoResiduo = "Nuclear";
            NuRSchema._radiaccion = a.radiaccion;
            ERschema = new residuo_1.Resi(NuRSchema);
        }
        else if (a instanceof resQuimico_1.ResQuimico) {
            QuiRSchema._tipoResiduo = "Quimico";
            QuiRSchema._estado = a.estado;
            QuiRSchema._explosivo = a.explosivo;
            ERschema = new residuo_1.Resi(QuiRSchema);
        }
        yield ERschema.save()
            .then(() => console.log('Documento guardado correctamente'))
            .catch((err) => console.log('Error: ' + err));
    }
    yield database_1.db.desconectarBD();
});
exports.salvar = salvar;
let empleados = new Array();
const nuevoOpTecnico = () => __awaiter(void 0, void 0, void 0, function* () {
    let empOperario;
    const cod = yield (0, entradaTeclado_1.leer)('codigo identificativo');
    const nombre = yield (0, entradaTeclado_1.leer)('nombre del empleado');
    const fechaIni = new Date(yield (0, entradaTeclado_1.leer)('fecha del inicio de contrato del empleado'));
    const sueldoBase = parseInt(yield (0, entradaTeclado_1.leer)('sueldo base del empleado'));
    const horasExtra = parseInt(yield (0, entradaTeclado_1.leer)('horas extra que ha hecho el empleado el ultimo año'));
    empOperario = new operarioTecnico_1.operarioTecnico(cod, nombre, fechaIni, sueldoBase, horasExtra);
    empleados.push(empOperario);
});
exports.nuevoOpTecnico = nuevoOpTecnico;
const nuevoQuimico = () => __awaiter(void 0, void 0, void 0, function* () {
    let empQuimi;
    const cod = yield (0, entradaTeclado_1.leer)('codigo identificativo');
    const nombre = yield (0, entradaTeclado_1.leer)('nombre del empleado');
    const fechaIni = new Date(yield (0, entradaTeclado_1.leer)('fecha del inicio de contrato del empleado'));
    const sueldoBase = parseInt(yield (0, entradaTeclado_1.leer)('sueldo base del empleado'));
    const formulas = parseInt(yield (0, entradaTeclado_1.leer)('nuevas formulas creadas por el empleado quimico'));
    empQuimi = new quimico_1.empQuimico(cod, nombre, fechaIni, sueldoBase, formulas);
    empleados.push(empQuimi);
});
exports.nuevoQuimico = nuevoQuimico;
// declaro schema donde voy a introducir el objeto q crea el usuario
let EMPschema;
//declaro schema compatible con la clase
let OPESchema = {
    _tipoEmpleado: null,
    _cod: null,
    _nombre: null,
    _fechaIni: null,
    _sueldoBase: null,
    _horasExtras: null
};
//declaro schema compatible con la clase
let QUISchema = {
    _tipoEmpleado: null,
    _cod: null,
    _nombre: null,
    _fechaIni: null,
    _sueldoBase: null,
    _formulas: null
};
//
const salvar2 = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    for (let a of empleados) {
        QUISchema._cod = OPESchema._cod = a.cod;
        QUISchema._nombre = OPESchema._nombre = a.nombre;
        QUISchema._fechaIni = OPESchema._fechaIni = a.fechaIni;
        QUISchema._sueldoBase = OPESchema._sueldoBase = a.sueldoBase;
        if (a instanceof operarioTecnico_1.operarioTecnico) {
            OPESchema._tipoEmpleado = "operarioTecnico";
            OPESchema._horasExtras = a.horasExtra;
            EMPschema = new empleado_1.Emp(OPESchema);
        }
        else if (a instanceof quimico_1.empQuimico) {
            QUISchema._tipoEmpleado = "Quimico";
            QUISchema._formulas = a.formulas;
            EMPschema = new empleado_1.Emp(QUISchema);
        }
        yield EMPschema.save()
            .then(() => console.log('Documento guardado correctamente'))
            .catch((err) => console.log('Error: ' + err));
    }
    yield database_1.db.desconectarBD();
});
exports.salvar2 = salvar2;
