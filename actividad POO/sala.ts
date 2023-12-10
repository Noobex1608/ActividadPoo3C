import { Pelicula } from "./pelicula";
export class Sala {
    constructor(public numero: number, public capacidad: number, public pelicula: Pelicula) {}
}