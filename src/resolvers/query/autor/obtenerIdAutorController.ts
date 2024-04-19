import { getAutorByIdService } from "../../../services/autor";
import { GraphQLError } from "graphql";

export const getAutor = async (_: void, args: any) => {
    try {
        const id = args.id;
        const autor = await getAutorByIdService(id);
        return autor;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};