import { Prestamo, prestamoActualizar } from '../../entities/prestamo';
import * as PrestamoRepositorio from '../../respositories/prestamoRepositorio';

export const eliminarPrestamoServicio = async (id: number) : Promise<Prestamo> => {
    try {
        const prestamo = await PrestamoRepositorio.getById(id);
        if(prestamo) {
            await PrestamoRepositorio.destroy(id);
            return prestamo;
        }
        throw new Error('Prestamo no encontrado');
    } catch (error : any) {
        throw new Error(error);
    }
};