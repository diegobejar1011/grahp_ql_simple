import { getLibrosService } from "../../../services/libro/getLibrosService";
import { GraphQLError } from "graphql";

export const libros = async (_: void, args: any) => {
    try {
        const libros = await getLibrosService();
        return libros;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
}