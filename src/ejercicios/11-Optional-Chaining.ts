/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'David'
}

const pasajero2: Pasajero = {
    nombre: 'melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHIjos ( pasajero: Pasajero ) {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}


imprimeHIjos(pasajero1);