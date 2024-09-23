/* Objetivo: Implementar un patrón Singleton para gestionar un inventario de equipos informáticos.

Crear una clase Inventario que siga el patrón Singleton.
Esta clase debe permitir registrar equipos con las propiedades nombre, tipo y estado (Ej.: "disponible", "en reparación").
Agregar un método agregarEquipo para añadir equipos y un método listarEquipos para devolver la lista completa de equipos registrados. */

interface Equipo {
    nombre: string,
    tipo: string, 
    estado: string
}

class Inventario {
    private static instancia: Inventario;
    private equipo : Equipo = {
        nombre: '',
        tipo: '',
        estado: ''
    }
    private constructor(){}

    public static obtenerInstancia(): Inventario{
        if (!Inventario.instancia){
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo( nombre: string, tipo: string, estado: string): void {
        this.equipo = {
            nombre: nombre,
            tipo: tipo,
            estado: estado
        }
    }

    public listarEquipos(): Equipo {
        return this.equipo;
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos()); 
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]