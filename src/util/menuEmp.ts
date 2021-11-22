import { leer } from './entradaTeclado'

export const menuEmp = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Empleado operario tecnico')
    console.log('2.- Empleado quimico')
    console.log('3.- Salvar empleados')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}