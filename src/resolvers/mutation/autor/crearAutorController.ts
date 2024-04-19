import { createAutorService } from "../../../services/autor";
import { GraphQLError } from "graphql";

export const createAutor = async (_: void, args: any) => {
    try {
        const { nombre, nacionalidad } = args.autor;
        console.log(args);
        const autor = await createAutorService({ nombre, nacionalidad});
        return autor;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};