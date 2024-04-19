import * as AutorRepository from '../../respositories/autoresRepository';
import { Autor, AutorRequest, AutorActualizar } from '../../entities/autor';

export const createAutorService = async (autor : AutorRequest) : Promise<Autor> => {
    try {
        const { nombre, nacionalidad } = autor;
        const id = await AutorRepository.create(nombre, nacionalidad);
        return { id, nombre, nacionalidad };
    } catch (error : any) { 
        throw new Error(error);
    }
};
