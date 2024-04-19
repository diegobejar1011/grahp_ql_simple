import { deleteAutorService } from "../../../services/autor";
import { GraphQLError } from "graphql";

export const deleteAutor = async (_: void, args: any) => {
    try {
        const id = args.id;
        const autor = await deleteAutorService(id);
        return autor;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
}