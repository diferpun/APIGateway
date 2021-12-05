const bidResolver = {
    Query: {
        
        bidByUser: async(root, {user}, { dataSources, userIdToken }) => {
            console.log(user)
            console.log(userIdToken)
            if(user==userIdToken){
                
                console.log("entre")
                return await dataSources.bidAPI.bidByUser(user);
            }
            else
                return null
        },
        bids: async(root, args, { dataSources}) => {
            
            return await dataSources.bidAPI.bids();
            
        },
        bidByUserAuction: async(root, {user,auction}, { dataSources, userIdToken }) =>  {
            if(user==userIdToken)
                return await dataSources.bidAPI.bidByUserAuction(user,auction);
            else
                return null
            }
    },
    Mutation: {
        newBid: async(root, args, { dataSources ,userIdToken }) => {
            if(args.user==userIdToken){
                let response ={
                    "message": await dataSources.bidAPI.newBid(args)
                } 
                return response
            }
            let response2 ={
                "message" : "No esta autorizado para hacer la solicitud"
            }
            return response2
        },
        deleteBid: async(root, { user, auction }, { dataSources, userIdToken}) => {
            if(user==userIdToken){
                console.log("entré")
                let response = {
                    "message" : await dataSources.bidAPI.deleteBid(user,auction)
                }
                return response
            }
            else
                response = {
                    "message": "No esta autorizado para hacer la solicitud"
                }
                return response 
        }
    }
}

export default bidResolver;