import { Cliente } from "./cliente";

abstract class ComboDecorator {
    constructor(protected cliente: Cliente) {}

    public abstract mostrarDetalle(): void;
}

export class ComboComida extends ComboDecorator {
    private productosComestibles: string[];

    constructor(cliente: Cliente, productosComestibles: string[]) {
        super(cliente);
        this.productosComestibles = productosComestibles;
    }

    public mostrarDetalle(): void {
        this.cliente.mostrarDetalle();
        console.log(`Productos Comestibles (Combo): ${this.productosComestibles.join(", ")}`);
    }
}