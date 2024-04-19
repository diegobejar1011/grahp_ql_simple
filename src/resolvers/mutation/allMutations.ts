import { 
    updateAutor,
    deleteAutor, 
    createAutor
} from "./autor";

import {
    createLibro,
    updateLibro,
    deleteLibro
} from "./libro"

import {
    crearPrestamo,
    actualizarPrestamo,
    eliminarPrestamo
} from "./prestamo"


export const Mutation = {
    updateAutor,
    deleteAutor,
    createAutor,
    createLibro,
    updateLibro,
    deleteLibro,
    crearPrestamo,
    actualizarPrestamo,
    eliminarPrestamo
};