import { Pelicula } from "./pelicula";
interface Observador {
    actualizar(pelicula: Pelicula): void;
}

export class Cine {
    private observadores: Observador[] = [];

    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    public notificarCambios(pelicula: Pelicula): void {
        for (const observador of this.observadores) {
            observador.actualizar(pelicula);
        }
    }
}



