const auctionResolver = {
    Query: {
        auctions: async(root, args, { dataSources }) => {
            
            return await dataSources.auctionAPI.auctions();
        },
        auctionById: async(root, {id}, { dataSources }) => {
            
            return await dataSources.auctionAPI.auctionById(id);
        }
    },
    Mutation: {
        newAuction: async(root, args, { dataSources }) => {
            let response = {
                "message" : await dataSources.auctionAPI.newAuction(args)
            }
            return response
        },
        updateAuction: async(root, args, { dataSources }) => {
            return await dataSources.auctionAPI.updateAuction(args);
        },
        deleteAuction: async(root, { id }, { dataSources }) => {
            let response = {
                "message" : await dataSources.auctionAPI.deleteAuction(id)
            }
            return response
        }
    }
}

export default auctionResolver;