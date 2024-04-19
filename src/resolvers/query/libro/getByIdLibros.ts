import { getByIdLibrosService } from "../../../services/libro/getByIdLibrosService";
import { GraphQLError } from "graphql";

export const getLibro = async (_: void, args: any) => {
    try {
        const id = args.id;
        const libro = await getByIdLibrosService(id);
        return libro;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};