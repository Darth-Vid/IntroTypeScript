/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Healing', 'Melee', 'Bash', 100];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Batman',
    hp: 100,
    habilidades: ['Kick', 'BatHook', 'Fly']
};

personaje.puebloNatal = 'Ciudad Gotica';

console.log(personaje);