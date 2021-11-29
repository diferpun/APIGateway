const productResolver = {
    Query: {
        products: async(root, args, { dataSources }) => {
            // llamar authAPI para verificar token
            return await dataSources.productAPI.products();
        },
        productById: async(root, {id}, { dataSources }) => {
            //  authAPI to verify token
            return await dataSources.productAPI.productById(id);
        }
    },
    Mutation: {
        newProduct: async(root, args, { dataSources }) => {
            return await dataSources.productAPI.newProduct(args);
        },
        updateProduct: async(root, args, { dataSources }) => {
            return await dataSources.productAPI.updateProduct(args);
        },
        deleteProduct: async(root, { id }, { dataSources }) => {
            return await dataSources.productAPI.deleteProduct(id);
        }
    }
}

export default productResolver;