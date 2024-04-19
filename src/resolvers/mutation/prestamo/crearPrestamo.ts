import { crearPrestamoServicio } from "../../../services/prestamo/crearPrestamoServicio";
import { GraphQLError } from "graphql";

export const crearPrestamo = async (_: void, args: any) => {
    try {
        const { prestamo } = args;
        const prestamoCreado = await crearPrestamoServicio(prestamo);
        return prestamoCreado;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};