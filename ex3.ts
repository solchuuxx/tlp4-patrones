/* Objetivo: Utilizar el patrón Observer para notificar a un departamento de soporte cuando un equipo cambia de estado.

Crear una clase Soporte que actúe como observador y reciba notificaciones cuando el estado de un equipo cambie.
Implementar la clase Equipo que permita agregar observadores y notifique a los observadores cuando su estado cambie. */

interface Observador {
    actualizar(estado: string): void;
}

class Equipo {
    private observadores: Observador[] = [];

    constructor(
        private nombre: string,
        private tipo: string,
        private estado: string
    ) {}

    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    public eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.estado));
    }
}

export class Soporte implements Observador {
    public actualizar(estado: string): void {
        console.log(`Soporte notificado: Un equipo ha cambiado su estado a ${estado}`);
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
//Soporte notificado: Un equipo ha cambiado su estado a "en reparación".
