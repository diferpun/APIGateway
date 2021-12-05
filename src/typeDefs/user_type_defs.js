import { gql } from 'apollo-server';

const userTypeDefs = gql`
type Tokens {
        refresh: String!
        access: String!
}
type Access {
        access: String!
}
type Answer{
        message: String!
    }
type UserDetail {
        id: Int
        firstname: String
        lastname: String
        username: String
        password: String
        email: String
        isadmi: Boolean 
}


type Query {
        users: [UserDetail]
        userById(id: Int!): UserDetail
}
type Mutation {
        loginUser(
                username: String!
                password: String!
        ) : Tokens!

        refreshToken(refresh:String!):Access!
        
        newUser(
                firstname: String!
                lastname: String!
                username: String!
                password: String!
                email: String!
                isadmi: Boolean! 
        ): Tokens!

        updateUser (
                id: Int!
                firstname: String!
                lastname: String!
                username: String!
                password: String!
                email: String!
                isadmi: Boolean!
        ) : Answer

        deleteUser(id:Int!):Answer
        
        }
`
export default userTypeDefs;