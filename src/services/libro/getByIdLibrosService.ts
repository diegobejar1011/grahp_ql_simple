import * as LibroRepository from '../../respositories/librosRepository';
import { Libro } from '../../entities/libro';

export const getByIdLibrosService = async (id: number ) : Promise<Libro> => {
    try {
        const libro = await LibroRepository.getById(id);
        return libro;
    } catch (error : any) {
        throw new Error(error);
    }
};