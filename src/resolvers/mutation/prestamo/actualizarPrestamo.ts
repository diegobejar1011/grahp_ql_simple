import { actualizarPrestamoServicio } from "../../../services/prestamo/actualizarPrestamoServicio";
import { GraphQLError } from "graphql";

export const actualizarPrestamo = async (_: void, args: any) => {
    try {
        const { id, prestamo } = args;
        const prestamoActualizado = await actualizarPrestamoServicio( id, prestamo);
        return prestamoActualizado;
    } catch (error : any) {
        throw new GraphQLError(error);   
    }
};