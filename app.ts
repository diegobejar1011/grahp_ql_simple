import { db } from "./src/config/db.config";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
//Query and Mutation
import { Mutation } from "./src/resolvers/mutation/allMutations";
import { Query } from "./src/resolvers/query/allQuery";

// connection at database 
db.connect()
.then(() => {
    console.log('Complete connection at database');
})
.catch((error : any) => {
    throw new Error(error);
})

const typeDefs = `
   type Autor {
        id: ID
        nombre: String
        nacionalidad: String
   }

   type Libro {
        id: ID
        titulo: String 
        autor_id: Int
        editorial: String
        anio_publicacion: Int
        genero: String 
   }

   type Prestamo {
     id: ID
     libro_id: ID
     usuario_id: ID
     fecha_prestamo: String
     fecha_devolucion: String
   }

   input AutorInput { 
        nombre: String
        nacionalidad: String
   }

   input LibroInput {
        titulo: String
        autor_id: Int
        editorial: String 
        anio_publicacion: Int
        genero: String 
   }

   input PrestamoInput {
     usuario_id: ID
     libro_id: ID
     fecha_prestamo: String
     fecha_devolucion: String
   }

   type Query {
        autores: [Autor]
        getAutor(id: ID): Autor
        libros: [Libro]
        getLibro(id: ID): Libro
        prestamos: [Prestamo]
        prestamo(id: ID): Prestamo
   }

   type Mutation {
        createAutor(autor : AutorInput) : Autor
        updateAutor(id : ID, autor : AutorInput) : Autor
        deleteAutor(id : ID) : Autor
        createLibro(libro : LibroInput ) : Libro
        updateLibro(id: ID, libro : LibroInput ) : Libro
        deleteLibro(id: ID): Libro
        crearPrestamo(prestamo: PrestamoInput) : Prestamo
        actualizarPrestamo(id: ID, prestamo: PrestamoInput) : Prestamo
        eliminarPrestamo(id: ID) : Prestamo
     }
`;


const resolvers = {
    Query,
    Mutation
};

const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers
});


(async () => {
    const { url } = await startStandaloneServer(server);
    console.log(`Server running in ${url}`);
})();