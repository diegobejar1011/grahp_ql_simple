import { Prestamo, prestamoActualizar } from '../../entities/prestamo';
import * as PrestamoRepositorio from '../../respositories/prestamoRepositorio';

export const actualizarPrestamoServicio = async (id: number, prestamoAct: prestamoActualizar) : Promise<Prestamo>=> {
    try {
        const prestamoAlm = await PrestamoRepositorio.getById(id);
        if(prestamoAlm) {
            const prestamoNuevo = {
                ...prestamoAlm,
                ...prestamoAct
            };
            const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion} = prestamoNuevo;
            await PrestamoRepositorio.update(id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion);
            return prestamoNuevo;
        }
        throw new Error('Prestamo no encontrado');
    } catch (error : any) {
        throw new Error(error); 
    }
};