import {RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";

class ProductAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.product_api_url;
    }

    async products() {
        return await this.get('/products');
    }

    async productById(id) {
        return await this.get(`/getProduct/${id}`);
    }
   

    async newProduct(body) {
        return await this.post('/product', body);
    }
    async updateProduct(data) {
        const { id, ...body } = data;
        return await this.put(`/updateProduct/${id}`, body);
    }

    async deleteProduct(id) {
        return await this.delete(`/deleteProduct/${id}`);
    }
}

export default ProductAPI;