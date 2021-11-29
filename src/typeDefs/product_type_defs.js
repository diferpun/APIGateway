import { gql } from 'apollo-server';

const productTypeDefs = gql`
type Product {
        id: String!
        productName: String! 
        basePrice: Float!
        category: String!
}
type Query {

        products:[Product]
        productById(id: String!): Product
}
type Mutation {
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
        deleteProduct(id:String!):Product
        }
`
export default productTypeDefs;