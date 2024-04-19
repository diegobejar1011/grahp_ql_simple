import * as AutorRepository from '../../respositories/autoresRepository';
import { Autor } from '../../entities/autor';

export const getAutorService = async () : Promise<[Autor]> => {
    try {
        const autores = await AutorRepository.get();
        return autores;
    } catch (error : any) {
        throw new Error(error);
    }
};
