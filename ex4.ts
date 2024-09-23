/* Objetivo: Implementar el patrón Adaptador para integrar una clase antigua de inventario con el nuevo sistema.

Crear una clase InventarioViejo que tenga un método agregarItem.
Implementar una clase AdaptadorInventario que permita utilizar InventarioViejo con la nueva interfaz Inventario. */

interface Inventario {
    equipos: { 
        nombre: string, 
        tipo: string, 
        estado: string }[];
}

class InventarioViejo implements Inventario {
    equipos: { 
        nombre: string, 
        tipo: string, 
        estado: string }[];

    constructor() {
        this.equipos = [];
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string ): void {
        const equipo = {
            nombre : nombre,
            tipo: tipo,
            estado: estado

        } 
        this.equipos.push(equipo);
    }

    public listarEquipos() {
        return this.equipos;
    }
}

export class AdaptadorInventario {

    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo( nombre: string, tipo: string, estado: string ): void {
        this.inventarioViejo.agregarEquipo(nombre, tipo, estado);
    }

    public listarEquipos() {
        return this.inventarioViejo.listarEquipos();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]