import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";


class AuctionAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.auth_api_url
    }
    async auctions() {
        return await this.get('/auctionlistview/');
    }

    async auctionById(id) {
        return await this.get(`/auctiondetailView/${id}`);
    }

    async newAuction(body) {
        return await this.post('/createauction/', body);
    }
    async updateAuction(data) {
        const { id, ...body } = data;
        return await this.put(`/auctionupdateView/${id}`, body);
    }

    async deleteAuction(id) {
        return await this.delete(`/auctiondeleteView/${id}`);
    }
}

export default AuctionAPI;