import { getAutorService } from "../../../services/autor";
import { GraphQLError } from "graphql";

export const autores = async (_: void, args : any) => {
    try {
        const autores = await getAutorService();
        return autores;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};