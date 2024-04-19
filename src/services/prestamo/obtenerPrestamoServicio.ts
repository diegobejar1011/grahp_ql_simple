import { Prestamo } from '../../entities/prestamo';
import * as PrestamoRepositorio from '../../respositories/prestamoRepositorio';

export const obtenerPrestamoServicio = async ( id: number) : Promise<Prestamo> => {
    try {
        const prestamo = await PrestamoRepositorio.getById(id);
        return prestamo;
    } catch (error : any) {
        throw new Error(error);
    }
};