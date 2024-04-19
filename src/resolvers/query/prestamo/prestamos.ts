import { obtenerPrestamosServicio } from "../../../services/prestamo/obtenerPrestamosServicio";
import { GraphQLError } from "graphql";

export const prestamos = async (_: void, args: any) => {
    try {
        const prestamos = await obtenerPrestamosServicio();
        return prestamos;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};