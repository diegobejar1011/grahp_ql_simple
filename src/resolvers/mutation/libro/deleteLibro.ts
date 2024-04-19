import { deleteLibrosService } from "../../../services/libro/deleteLibrosService";
import { GraphQLError } from "graphql";

export const deleteLibro = async (_: void, args: any) => {
    try {
        const id = args.id
        const libro = await deleteLibrosService(id);
        return libro;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};