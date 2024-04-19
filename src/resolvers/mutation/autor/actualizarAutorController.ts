import { updateAutorService } from "../../../services/autor";
import { GraphQLError } from "graphql";

export const updateAutor = async (_: void, args: any) => {
    try {
        const data = args.autor;
        const id = args.id;
        const autor = await updateAutorService(id, data);
        return autor;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
}