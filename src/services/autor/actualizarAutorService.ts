import * as AutorRepository from '../../respositories/autoresRepository';
import { Autor, AutorActualizar } from '../../entities/autor';

export const updateAutorService = async (id : number, data : AutorActualizar) : Promise<Autor> => {
    try {
        const autor = await AutorRepository.getById(id);
        if(autor) {
            const nuevoAutor : Autor = {
                ...autor,
                ...data
            };
            await AutorRepository.update(id, nuevoAutor.nombre, nuevoAutor.nacionalidad );
            return nuevoAutor;
        }
        throw new Error('Autor no encontrado');
    } catch (error : any) {
        throw new Error(error);
    }
};

