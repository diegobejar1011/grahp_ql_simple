import * as AutorRepository from '../../respositories/autoresRepository';
import { Autor } from '../../entities/autor';

export const getAutorByIdService = async (id : number) : Promise<Autor> => {
    try {
        const autor = await AutorRepository.getById(id);
        return autor;
    } catch (error : any) {
        throw new Error(error);
    }
};