import { ApolloServer } from 'apollo-server';
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
import ProductAPI from "./dataSources/product_api.js";
import AuctionAPI from './dataSources/auction_api.js';
import UserAPI from './dataSources/user_api.js';
import BidAPI from './dataSources/bid_api.js';
import authentication from './utils/authentication.js';


const server = new ApolloServer({
    context: authentication,
    typeDefs, 
    resolvers,
    dataSources: () => ({
        productAPI: new ProductAPI(),
        auctionAPI : new AuctionAPI(),
        userAPI : new UserAPI(),
        bidAPI : new BidAPI(),

    })
});

server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});