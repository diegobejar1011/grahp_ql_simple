import * as LibroRepository from '../../respositories/librosRepository';
import { Libro } from '../../entities/libro';

export const getLibrosService = async () : Promise<[Libro]> => {
    try {
        const libros = await LibroRepository.get();
        return libros;
    } catch (error : any) {
        throw new Error(error);
    }
};