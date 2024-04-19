import { Prestamo } from '../../entities/prestamo';
import * as PrestamoRepositorio from '../../respositories/prestamoRepositorio';

export const obtenerPrestamosServicio = async () : Promise<[Prestamo]> => {
    try {
        const prestamos = await PrestamoRepositorio.get();
        return prestamos;
    } catch (error : any) {
        throw new Error(error);
    }
};