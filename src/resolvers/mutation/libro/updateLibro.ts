import { updateLibrosService } from "../../../services/libro/updateLibrosService";
import { GraphQLError } from "graphql";

export const updateLibro = async (_: void, args: any) => {
    try {
        const data = args.libro;
        const id = args.id;
        const libro = await updateLibrosService(id, data);
        return libro;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
}