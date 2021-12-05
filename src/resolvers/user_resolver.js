const userResolver = {
    Query: {
        
        userById: async(root, {id}, { dataSources, userIdToken }) => {

            if(id==userIdToken){
                return await dataSources.userAPI.userById(id);
            }else{
                return null
            }
        },

        users: async(root, args, { dataSources}) => {
            return await dataSources.userAPI.users();
        }
        
    },
    Mutation: {
        loginUser: async(root, args, { dataSources }) => {
            return await dataSources.userAPI.loginUser(args);
        },
        refreshToken: async(_,{refresh}, { dataSources }) => 
             dataSources.userAPI.refreshToken(refresh),
        
        newUser: async(root, args, { dataSources }) => {
            return await dataSources.userAPI.newUser(args);
        },
        updateUser: async(root, args, { dataSources, userIdToken }) => {
            if(args.id==userIdToken){
                let response = {
                    "message" : await dataSources.userAPI.updateUser(args)
                }
                return response
            }else{
                response= {
                    "message" : "No fue posible autenticar el usuario."
                }
                return response
            }
            
        },
        deleteUser: async(root, { id }, { dataSources , userIdToken}) => {
            if(id==userIdToken){
                let response = {
                    "message" : await dataSources.userAPI.deleteUser(id)
                }
                return response
            }else{
                response= {
                    "message" : "No fue posible autenticar el usuario."
                }
                return response
            }
            
        }
    }
}

export default userResolver;