import { Prestamo, prestamoCrear } from '../../entities/prestamo';
import * as PrestamoRepositorio from '../../respositories/prestamoRepositorio';

export const crearPrestamoServicio = async (prestamo: prestamoCrear) : Promise<Prestamo> => {
    try {
        const { usuario_id, libro_id, fecha_prestamo , fecha_devolucion } = prestamo;
        const id = await PrestamoRepositorio.create( usuario_id, libro_id, fecha_prestamo, fecha_devolucion);
        return {
            id, 
            usuario_id,
            libro_id,
            fecha_prestamo,
            fecha_devolucion
        }
    } catch (error : any) {
        throw new Error(error);
    }
};