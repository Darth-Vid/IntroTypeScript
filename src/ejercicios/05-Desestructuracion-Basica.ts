/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {

    volumen: 90,
    segundo: 26,
    cancion: 'Todo se transforma',

    detalles: {
        autor: 'Jorge Drexler',
        anio: 2002
    }
}


const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;



// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es de: ', cancion);
// console.log('El autor actual es de: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log(p3);
