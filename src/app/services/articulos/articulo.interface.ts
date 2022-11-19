export interface ArticuloResponse {
    ok: boolean,
    items: Articulo[]
}

export interface Articulo {
    _id: string,
    denominacion: string,
    descripcion: string,
    imagen: string,
    tiempoEstimadoCocina: number,
    precio: Precio,
    detalles: Detalle[]
    categoria: string,
    receta: string
}

interface Precio {
    precioVenta: number,
    precioCompra: number
}

interface Detalle {
    cantidad: number,
    insumo: string
}