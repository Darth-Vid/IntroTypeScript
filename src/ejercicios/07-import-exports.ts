/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./06-Desestructuracion-Funcion";

const carritoCompras: Producto[] = [{
    desc: 'Telefono',
    precio: 150
},
{
    desc: 'Tablet',
    precio: 300
}
];

const [total, isv] = calcularISV( carritoCompras );

console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);