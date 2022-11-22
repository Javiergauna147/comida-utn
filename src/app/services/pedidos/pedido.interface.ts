export interface Pedido {
    numero: string,
    tipoEntrega: string,
    horaEstimadaFin: Date,
    fecha: Date,
    estado: string,
    detalle: Detalle,
    domicilio: Domicilio
}

interface Detalle {
    cantidad: number,
    insumo: string
}

interface Domicilio {
    calle: string,
    numero: number,
    localidad: string
}