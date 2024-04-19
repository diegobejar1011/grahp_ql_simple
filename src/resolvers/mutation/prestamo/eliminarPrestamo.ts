import { eliminarPrestamoServicio } from "../../../services/prestamo/eliminarPrestamoServicio";
import { GraphQLError } from "graphql";

export const eliminarPrestamo = async (_: void, args: any) => {
    try {
        const { id } = args;
        const prestamoEliminado = await eliminarPrestamoServicio(id);
        return prestamoEliminado;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
};