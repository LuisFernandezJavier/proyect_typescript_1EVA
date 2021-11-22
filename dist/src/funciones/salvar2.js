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
exports.salvar2 = exports.nuevoQuimico = exports.nuevoOpTecnico = void 0;
const quimico_1 = require("../classes/quimico");
const operarioTecnico_1 = require("../classes/operarioTecnico");
const entradaTeclado_1 = require("../util/entradaTeclado");
const database_1 = require("../database/database");
const empleado_1 = require("../schemas/empleado");
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
            OPESchema._tipoEmpleado = "OperarioTecnico";
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
