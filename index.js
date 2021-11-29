import { ApolloServer } from 'apollo-server';
import typeDefs from "./src/typeDefs/index.js";
import resolvers from "./src/resolvers/index.js";
import ProductAPI from "./src/dataSources/product_api.js";


const server = new ApolloServer({
    typeDefs, 
    resolvers,
    dataSources: () => ({
        productAPI: new ProductAPI()
    })
});

server.listen().then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});