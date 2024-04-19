import * as LibroRepository from '../../respositories/librosRepository';
import { Libro, LibroRequest } from '../../entities/libro';

export const createLibroService = async (libro: LibroRequest) : Promise<Libro> => {
    try {
        const { titulo, autor_id, editorial, anio_publicacion, genero } = libro;
        const id = await LibroRepository.create(titulo, autor_id, editorial, anio_publicacion, genero);
        return { 
            id,
            ...libro
        }
    } catch (error : any) {
        throw new Error(error);
    }
}; 