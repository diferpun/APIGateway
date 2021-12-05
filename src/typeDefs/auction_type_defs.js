import { gql } from 'apollo-server';

const auctionTypeDefs = gql`
type Auction {
        auction_id:Int!
        product: String!
        base_offer: Float!
        time_starting: String
        time_ending: String
}
type Answer {
        message : String!
}
type Query {

        auctions:[Auction]
        auctionById(id: Int!): Auction
}
type Mutation {
        newAuction(
            auction_id:Int
            product: String!
            base_offer: Float! 
            time_starting: String!
            time_ending: String!
        ) : Answer
        updateAuction (
            auction_id:Int!
            product: String!
            base_offer: Float! 
            time_starting: String!
            time_ending: String!
        ) : Auction
        deleteAuction(id:Int!):Answer
        }
`
export default auctionTypeDefs;