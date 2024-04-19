import { db } from "../config/db.config";

export const create = async (titulo: string, autor_id: number, editorial: string, año_publicacion: number, genero: string) : Promise<number> => {
    try {
        const query = 'INSERT INTO libros (titulo, autor_id, editorial, anio_publicacion, genero) VALUES (?,?,?,?,?)';
        const result : any = await db.execute(query,[titulo,autor_id,editorial,año_publicacion,genero]);
        return result[0].insertId;
    } catch (error : any) {
        throw new Error(error);
    }
};

export const get = async () : Promise<any> => {
    try {
        const query = 'SELECT id, titulo, autor_id, editorial, anio_publicacion, genero FROM libros';
        const [libros] = await db.execute(query);
        return libros;
    } catch (error : any) {
        throw new Error(error);
    }
};

export const getById = async (id: number) : Promise<any> => {
    try {
        const query = 'SELECT id, titulo, autor_id, editorial, anio_publicacion, genero FROM libros WHERE id=?';
        const [libro] : any = await db.execute(query, [id]);
        return libro[0];
    } catch (error : any) {
        throw new Error(error);
    }
};

export const update = async (id: number, titulo: string, autor_id: number, editorial: string, anio_publicacion: number, genero: string) : Promise<void> => {
    try {
        const query = 'UPDATE libros SET titulo = ?, autor_id = ?, editorial = ?, anio_publicacion = ?, genero = ? WHERE id = ?';
        await db.execute(query,[titulo, autor_id, editorial, anio_publicacion, genero, id]);
    } catch (error : any) {
        throw new Error(error);
    }
};

export const destroy = async (id: number) => {
    try {
        const query = 'DELETE FROM libros WHERE id= ?';
        await db.execute(query, [id]);
    } catch (error : any) {
        throw new Error(error);
    }
};