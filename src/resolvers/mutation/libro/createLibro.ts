import { createLibroService } from "../../../services/libro/createLibroService";
import { GraphQLError } from "graphql";

export const createLibro = async (_: void, args: any) => {
    try {
        const data = args.libro;
        const libro = await createLibroService(data);
        return libro;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};