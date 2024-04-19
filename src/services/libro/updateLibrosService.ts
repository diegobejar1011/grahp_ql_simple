import * as LibroRepository from '../../respositories/librosRepository';
import { Libro, LibroUpdate } from '../../entities/libro';

export const updateLibrosService = async (id: number, libroUpdate: LibroUpdate ) : Promise<Libro> => {
    try {
        const libro = await LibroRepository.getById(id);
        const libroNuevo : Libro = {
            ...libro,
            ...libroUpdate
        }
        await LibroRepository.update(id, libroNuevo.titulo, libroNuevo.autor_id, libroNuevo.editorial, libroNuevo.anio_publicacion, libroNuevo.genero);
        return libroNuevo;
    } catch (error : any) {
        throw new Error(error);
    }
};