import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";


class BidAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.auth_api_url
    }
    async bidByUser(user) {
        return await this.get(`/detailbid/${user}`);
    }
    async bidByUserAuction(user, auction) {
        return await this.get(`/topbid/${user}/${auction}`);
    }
    async bids() {
        return await this.get('/bids');
    }
    async newBid(body) {
        return await this.post('/createbid/', body);
    }
    
    async deleteBid(user, auction) {
        return await this.delete(`/deletebid/${user}/${auction}`);
    }
    
}

export default BidAPI;