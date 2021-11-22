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
const menuPrincipal_1 = require("./src/util/menuPrincipal");
const menuRe_1 = require("./src/util/menuRe");
const salvar_1 = require("./src/funciones/salvar");
const cargadatos_1 = require("./src/funciones/cargadatos");
const menuEmp_1 = require("./src/util/menuEmp");
// MENU
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    do {
        n = yield (0, menuPrincipal_1.menuPrincipal)();
        switch (n) {
            case 1:
                let n;
                do {
                    n = yield (0, menuRe_1.menuRe)();
                    switch (n) {
                        case 1:
                            yield (0, salvar_1.nuevoResElectronico)();
                            break;
                        case 2:
                            yield (0, salvar_1.nuevoResNuclear)();
                            break;
                        case 3:
                            yield (0, salvar_1.nuevoResQuimico)();
                            break;
                        case 4:
                            yield (0, salvar_1.salvar)();
                            break;
                        case 0:
                            console.log('\nVolviendo a menu principal');
                    }
                } while (n != 0);
                break;
                break;
            case 2:
                yield (0, cargadatos_1.cargadatos)();
                break;
            case 3:
                let x;
                do {
                    x = yield (0, menuEmp_1.menuEmp)();
                    switch (x) {
                        case 1:
                            yield (0, salvar_1.nuevoOpTecnico)();
                            break;
                        case 2:
                            yield (0, salvar_1.nuevoQuimico)();
                            break;
                        case 3:
                            yield (0, salvar_1.salvar2)();
                            break;
                        case 0:
                            console.log('\nVolviendo a menu principal');
                    }
                } while (x != 0);
                break;
                break;
            case 4:
                break;
            case 5:
                break;
            case 0:
                console.log('\nAdios');
        }
    } while (n != 0);
});
main();
