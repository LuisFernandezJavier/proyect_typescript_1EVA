"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resi = void 0;
const mongoose_1 = require("mongoose");
const ResiSchema = new mongoose_1.Schema({
    _tipoResiduo: {
        type: String
    },
    _cod: {
        type: String
    },
    _peso: {
        type: Number
    },
    _fechaRecogida: {
        type: Date
    },
    _fechaEliminacion: {
        type: Date
    },
    _costeAlmacenamiento: {
        type: Number
    },
    _costeReciclaje: {
        type: Number
    },
    _descontaminacion: {
        type: Boolean,
    },
    _radiaccion: {
        type: String
    },
    _estado: {
        type: String
    },
    _explosivo: {
        type: Boolean
    }
});
exports.Resi = (0, mongoose_1.model)('residuos ', ResiSchema);
