import { leer } from '../util/entradaTeclado'

export const menuPrincipal = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nuevo Residuo')
    console.log('2.- Mostrar Residuo')
    console.log('3.- Nuevo Empleado')
    console.log('4.- ')
    console.log('5.- ')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}