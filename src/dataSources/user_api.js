import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";


class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.auth_api_url
    }
    async userById(id) {
        return await this.get(`/user/${id}`);
    }
    async users() {
        return await this.get('/users');
    }
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        console.log(token)
        return await this.post('/refresh/',token);
    }
    async loginUser(body){
        return await this.post('/login/', body);
    }
    async newUser(body) {
        return await this.post('/createuser/', body);
    }
    
    async deleteUser(id) {
        return await this.delete(`/deleteuser/${id}`);
    }
    
    async updateUser(data) {
        const { id, ...body } = data;
        return await this.put(`/updateuser/${id}`, body);
    }

    
}

export default UserAPI;