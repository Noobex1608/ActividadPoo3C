import { Pelicula } from "./pelicula";
import { Sala } from "./sala";
export class Cliente {
    constructor(public nombre: string, public pelicula: Pelicula, public sala: Sala, public asiento: string) {}

    public mostrarDetalle(): void {
        console.log(`
            Cliente: ${this.nombre},
            Película: ${this.pelicula.nombre},
            Sala: ${this.sala.numero},
            Asiento: ${this.asiento},
            Aperitivos Gratis: ${this.sala.pelicula.nombre},
            Productos Comestibles: ${this.obtenerProductosComestibles()}
        `);
    }

    private obtenerProductosComestibles(): string {
        return "Canguil, Hot-dog, Bebidas";
    }
}
