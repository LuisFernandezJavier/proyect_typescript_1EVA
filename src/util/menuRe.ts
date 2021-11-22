import { leer } from './entradaTeclado'

export const menuRe = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Residuo electronico')
    console.log('2.- Residuo nuclear')
    console.log('3.- Residuo quimico')
    console.log('4.- Salvar residuos')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}