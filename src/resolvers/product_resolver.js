import { ApolloError } from "apollo-server-errors";

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
        newProductWithAuction: async(root, args, { dataSources }) => {
            
            let product; 
            try {
                const { time_starting,time_ending, ...body } = args;
                product = await dataSources.productAPI.newProduct(body);
                let response = {
                    "message" : await dataSources.auctionAPI.newAuction({
                    product: product.id,
                    base_offer: product.basePrice,
                    time_starting,
                    time_ending
                    })
                }
                return response
            } catch (e) {
                console.log(e);
                if (product) {
                    await dataSources.productAPI.deleteProduct(product.id);
                }
                response = {
                    "message": "Hubo un error al crear un producto y/o  subasta"
                }
                return response
            }
        },
        newProduct: async(root, args, { dataSources }) => {
            return await dataSources.productAPI.newProduct(args);
        },
        updateProduct: async(root, args, { dataSources }) => {
            return await dataSources.productAPI.updateProduct(args);
        },
        deleteProduct: async(root, { id }, { dataSources }) => {
            let response = {
                "message": await dataSources.productAPI.deleteProduct(id)
            }
            return response
        },
        deleteProductAuction: async(root, {id_product, id_auction}, { dataSources }) => {
            let product
            try {
                product =  await dataSources.auctionAPI.auctionById(id_auction);
                if(product.product==id_product){
                   
                    let response={
                    "message":  await dataSources.auctionAPI.deleteAuction(id_auction)
                    }
                    await dataSources.productAPI.deleteProduct(id_product);
                    return response
                }                    
            } catch (e) {
                console.log(e);
                response = {
                    "message": "Hubo un error al intentar eliminar un producto o subasta"
                }
                return response
            }
        }
    }
}

export default productResolver;