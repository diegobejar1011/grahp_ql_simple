import * as AutorRepository from '../../respositories/autoresRepository';
import { Autor } from '../../entities/autor';

export const deleteAutorService = async (id: number) : Promise<Autor> => {
    try {
        const autor = await AutorRepository.getById(id);
        if(autor) {
            await AutorRepository.destroy(id);
            return autor;
        }
        throw new Error('Autor no encontrado');
    } catch (error : any) {
        throw new Error(error);
    }
};