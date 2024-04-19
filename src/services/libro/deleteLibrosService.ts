import * as LibroRepository from '../../respositories/librosRepository';
import { Libro } from '../../entities/libro';

export const deleteLibrosService = async (id: number) : Promise<Libro> => {
    try {
        const libro = await LibroRepository.getById(id);
        if(libro) {
            await LibroRepository.destroy(id);
            return libro;
        }
        throw new Error('Libro no encontrado');
    } catch (error : any) {
        throw new Error(error);
    }
};