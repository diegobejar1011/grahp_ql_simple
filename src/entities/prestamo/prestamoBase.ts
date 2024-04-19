export interface Prestamo {
    id: number;
    usuario_id: number;
    libro_id: number;
    fecha_prestamo: string;
    fecha_devolucion: string;
}