/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a+b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {

    return numero*base;

}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: () => void;

}

function curar( personaje: PersonajeLOR, salud: number ): void {

    personaje.pv += salud;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Gandalf',
    pv: 73,
    mostrarPV(){
        console.log(`Puntos de vida: ${this.pv}`);
    }
}

console.log(nuevoPersonaje.mostrarPV());
curar( nuevoPersonaje, 10);
console.log(nuevoPersonaje.mostrarPV());