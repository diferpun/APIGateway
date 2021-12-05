import { ApolloError } from "apollo-server-errors";
import servers from "../server.js";
import fetch from "node-fetch";


const authentication = async ({ req }) => {
const token = req.headers.authorization || '';
    if (token == ''){
        console.log(token);
        return { userIdToken: null };
    }
    else {
        try {
            console.log(token);
            let requestOptions = {method: 'POST', headers: { "Content-Type": "application/json" },body: JSON.stringify({ token }), redirect: 'follow'};
            let response = await fetch(`${servers.auth_api_url}/verifyToken/`,requestOptions)
            console.log(response)
            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }
                return { userIdToken: (await response.json()).UserId };
            }
            catch (error) {
                throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}
export default authentication;