import { Pelicula } from "./pelicula";
export class ListaPeliculas {
    private static instancia: ListaPeliculas;
    private peliculas: Pelicula[] = [];

    private constructor() {}

    public static obtenerInstancia(): ListaPeliculas {
        if (!ListaPeliculas.instancia) {
            ListaPeliculas.instancia = new ListaPeliculas();
        }
        return ListaPeliculas.instancia;
    }

    public agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    public obtenerPeliculas(): Pelicula[] {
        return this.peliculas;
    }
}