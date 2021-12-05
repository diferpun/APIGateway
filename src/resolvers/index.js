import productResolver from './product_resolver.js';
import lodash from 'lodash';
import auctionResolver from './auction_resolver.js';
import userResolver from './user_resolver.js';
import bidResolver from './bid_resolver.js';

const resolvers = lodash.merge(productResolver,auctionResolver,userResolver,bidResolver);

export default resolvers;