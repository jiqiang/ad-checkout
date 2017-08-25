import axios from "axios";

export default class Resource {
    
    constructor() {
        axios.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    
    getData() {
        return this._getDataFromJson();
    }

    _getDataFromApi() {

    }

    _getDataFromJson() {
        return axios.get("/data/data.json");
    }

}