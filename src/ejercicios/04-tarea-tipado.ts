/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string;
    pais: string;
    ciudad:string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    mostrarDireccion: () => string;
    direccion: Direccion;
}



const superHeroe: SuperHeroe = {
    nombre: 'Spider-Man',
    edad: 30,
    direccion: {
        calle: 'main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', '+ this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);