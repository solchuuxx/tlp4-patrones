/* Objetivo: Utilizar el patrón Factory Method para crear diferentes tipos de equipos.

Crear una clase EquipoFactory con un método crearEquipo que, basado en el tipo de equipo ("Notebook", "Desktop", "Servidor"), devuelva una instancia de la clase adecuada.
Crear clases específicas para cada tipo de equipo (Notebook, Desktop, Servidor), cada una con sus propias propiedades (Ej.: ram, procesador). */

interface EquipoFac {
    tipo : string;
    nombre : string;
    ram: string;
    procesador: string;
}

class Notebook implements EquipoFac{
    public tipo : string;
    public nombre : string;
    public ram: string;
    public procesador: string;

    constructor( tipo : string, nombre : string, ram: string, procesador: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    detalles(): string{
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class Desktop implements EquipoFac{
    public tipo : string;
    public nombre : string;
    public ram: string;
    public procesador: string;

    constructor( tipo : string, nombre : string, ram: string, procesador: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    public detalles(): string{
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador} `
    }
}

class Servidor implements EquipoFac{
    public tipo : string;
    public nombre : string;
    public ram: string;
    public procesador: string;

    constructor( tipo : string, nombre : string, ram: string, procesador: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    public detalles(): string{
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class EquipoFactory {
    public crearEquipo( tipo : string, nombre: string, ram: string, procesador: string ){
        switch (tipo) {
            case 'Notebook':
                return new Notebook(tipo, nombre, ram, procesador)

            case 'Desktop':
                return new Desktop(tipo, nombre, ram, procesador);

            case 'Servidor':
                return new Servidor(tipo, nombre, ram, procesador);
        
            default:
                throw new Error('No se encontro el tipo de equipo')
        }
    }
}

const factory = new EquipoFactory();
const Notebook1 = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook1.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7