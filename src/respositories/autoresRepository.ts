import { db } from "../config/db.config";

export const create = async (nombre: string, nacionalidad: string) : Promise<number> => {
    try {
        const query = 'INSERT INTO autores (nombre, nacionalidad) VALUES (?,?)';
        const result : any = await db.execute(query,[nombre, nacionalidad]);
        return result[0].insertId;
    } catch (error : any) {
        throw new Error(error);
    }
};

export const get = async () : Promise<any> => {
    try {
        console.log
        const query = 'SELECT id, nombre, nacionalidad FROM autores';
        const [autores] : any = await db.execute(query);
        return autores;
    } catch (error : any) {
        throw new Error(error);
    }
};

export const getById = async (id: number) : Promise<any> => {
    try {
        const query = 'SELECT id, nombre, nacionalidad FROM autores WHERE id = ?';
        const [autor] : any = await db.execute(query, [ id ]);
        return autor[0];
    } catch (error : any) {
        throw new Error(error);
    }
};

export const update = async (id: number, nombre: string, nacionalidad: string) : Promise<void> => {
    try {
        const query = 'UPDATE autores SET nombre = ?, nacionalidad = ? WHERE id = ?';
        await db.execute(query,[nombre, nacionalidad, id]);
    } catch (error : any) {
        throw new Error(error);
    }
};

export const destroy = async (id: number) : Promise<void> => {
    try {
        const query = 'DELETE FROM autores WHERE id = ?';
        await db.execute(query,[id]);
    } catch (error : any) {
        throw new Error(error);
    }
};
