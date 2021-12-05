import { gql } from 'apollo-server';

const productTypeDefs = gql`
type DeleteProductAuction{
        id: String
        auction: Int
}
type Answer {
        message: String
}
type Product {
        id: String!
        productName: String! 
        basePrice: Float!
        category: String!
        product: String!
        base_offer: Float
        time_starting : String
        time_ending : String
}
type Query {
        products:[Product]
        productById(id: String!): Product
}
type Mutation {
                newProductWithAuction(
                id: String!
                productName: String! 
                basePrice: Float!
                category: String!
                time_starting :String!
                time_ending : String!
        ):Answer
        newProduct(
                id:String!
                productName:String!
                description:String!
                basePrice:Float!
                category:String!
        ) : Product
        updateProduct (
                id:String!
                productName:String!
                description:String!
                basePrice:Float!
                category:String!
        ) : Product
        deleteProduct(id:String!):Answer

        deleteProductAuction(id_product:String!, id_auction: Int!): Answer
        }
`
export default productTypeDefs;