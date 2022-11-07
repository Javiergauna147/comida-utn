export interface ArticuloResponse {
    ok: boolean,
    articulos: Articulo[]
}

export interface Articulo {
    _id: string,
    denominacion: string,
    imagen: string,
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