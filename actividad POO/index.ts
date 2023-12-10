import { ListaPeliculas } from "./Lista_peliculas";
import { Pelicula } from "./pelicula";
import { Sala } from "./sala";
import { Cliente } from "./cliente";
import { ComboComida } from "./combo";
import { Cine } from "./cine";
// Uso de la implementación
const listaPeliculas = ListaPeliculas.obtenerInstancia();

const johnWick = new Pelicula("John Wick");
const aladdin = new Pelicula("Aladdin");

const sala1 = new Sala(1, 50, johnWick);
const sala2 = new Sala(2, 40, aladdin);

const cliente1 = new Cliente("Cliente1", johnWick, sala1, "A1");
const cliente2 = new Cliente("Cliente2", aladdin, sala2, "B5");

listaPeliculas.agregarPelicula(johnWick);
listaPeliculas.agregarPelicula(aladdin);

const cine = new Cine();
cine.agregarObservador({
    actualizar(pelicula: Pelicula) {
        console.log(`¡La película ${pelicula.nombre} ha experimentado cambios!`);
    }
});

cine.notificarCambios(johnWick);

const comboCliente1 = new ComboComida(cliente1, ["Canguil", "Hot-dog"]);
const comboCliente2 = new ComboComida(cliente2, ["Bebidas"]);

comboCliente1.mostrarDetalle();
comboCliente2.mostrarDetalle();