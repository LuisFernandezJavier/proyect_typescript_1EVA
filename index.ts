import { Residuo } from './src/classes/residuo';
import { leer } from "./src/util/entradaTeclado";
import { db } from './src/database/database';
import { menuPrincipal } from "./src/util/menuPrincipal";
import { menuRe } from './src/util/menuRe';
import {nuevoResElectronico , nuevoResNuclear , nuevoResQuimico , salvar,nuevoQuimico,nuevoOpTecnico,salvar2} from "./src/funciones/salvar"
import {cargadatos} from "./src/funciones/cargadatos"
import { menuEmp } from './src/util/menuEmp';





























// MENU

const main = async () => {
    let n: number 
    do {
        n= await menuPrincipal()
        switch(n){
            case 1:
                let n: number
                do {
                   n = await menuRe()
                   switch(n){
                       case 1:
                           await nuevoResElectronico();
                           break
                       case 2:
                           await nuevoResNuclear();
                           break
                       case 3:
                           await nuevoResQuimico();
                            break
                        case 4:
                            await salvar();
                            break
                       case 0:
                            console.log('\nVolviendo a menu principal')
                   }
               }while (n != 0)      
           break
                ;    
                break
                
            case 2:
              
                await cargadatos()
                break
            case 3:
                let x: number
                do {
                   x = await menuEmp()
                   switch(x){
                       case 1:
                           await nuevoOpTecnico();
                           break
                       case 2:
                           await nuevoQuimico();
                           break
                        case 3:
                            await salvar2();
                            break
                       case 0:
                            console.log('\nVolviendo a menu principal')
                   }
               }while (x != 0)      
           break
                ;    
                break
            case 4:
                    
                    break
            case 5:
                    
                    break
                    
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()
    





