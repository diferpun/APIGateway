import { gql } from 'apollo-server';

const bidTypeDefs = gql`
type Bid {
    bid_id : Int
    user : Int
    auction :Int
    offer: Float
    bid_time : String
}
type Answer{
    message: String!
}
type Query {
        bidByUser(user: Int!): [Bid]
        bids:[Bid]
        bidByUserAuction(user :Int!, auction: Int!) : [Bid]
}
type Mutation {
        newBid(
            bid_id : Int
            user : Int!
            auction :Int!
            offer: Float!
            bid_time : String
        ) : Answer
        
        deleteBid(user: Int!, auction:Int!):Answer
        
        }
`
export default bidTypeDefs;