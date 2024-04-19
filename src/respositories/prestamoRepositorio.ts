import { db } from "../config/db.config"

export const create = async (usuario_id: number, libro_id: number, fecha_prestamo: string, fecha_devolucion: string) : Promise<number> => {
    try {
        const query = 'INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?,?,?,?)';
        const result : any = await db.execute(query,[usuario_id,libro_id,fecha_prestamo,fecha_devolucion]);
        return result[0].insertId;
    } catch (error : any) {
        throw new Error(error);
    }
};

export const get = async () : Promise<any> => {
    try {
        const query = 'SELECT * FROM prestamos';
        const [prestamos] = await db.execute(query);
        return prestamos;
    } catch (error : any) {
        throw new Error(error);
    }
};

export const getById = async (id: number) : Promise<any> => {
    try {
        const query = 'SELECT * FROM prestamos WHERE id = ?';
        const [prestamo] : any = await db.execute(query,[id]);
        return prestamo[0]; 
    } catch (error : any) {
        throw new Error(error);
    }
};

export const update = async (id: number, usuario_id: number, libro_id: number, fecha_prestamo: string, fecha_devolucion: string) : Promise<void> => {
    try {
        const query = 'UPDATE prestamos SET usuario_id = ?, libro_id = ?, fecha_prestamo = ?, fecha_devolucion = ? WHERE id = ?';
        await db.execute(query,[usuario_id, libro_id, fecha_prestamo, fecha_devolucion, id]);
    } catch (error : any) {
        throw new Error(error);
    }
};

export const destroy = async (id: number) : Promise<void> => {
    try {
        const query = 'DELETE FROM prestamos WHERE id = ?';
        await db.execute(query,[id]);
    } catch (error : any) {
        throw new Error(error);
    }
};