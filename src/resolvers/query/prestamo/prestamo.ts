import { GraphQLError } from "graphql";
import { obtenerPrestamoServicio } from "../../../services/prestamo/obtenerPrestamoServicio";


export const prestamo = async (_: void, args: any) => {
    try {
        const id = args.id;
        const prestamo = await obtenerPrestamoServicio(id);
        return prestamo;
    } catch (error : any) {
        throw new Error(error);
    }
};