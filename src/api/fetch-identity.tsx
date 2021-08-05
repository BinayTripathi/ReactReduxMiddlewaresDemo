import axios from "axios";
import { UserData } from "../types/UserData";
import { generateAPI } from ".";

const  authenticateUser = (requestData : UserData) => {
    console.log(requestData);
    return generateAPI({token: 'token', extraHeaders : {version: '0'}, action: null}).get('https://my-json-server.typicode.com/BinayTripathi/demo/authenticate')
    /*return axios.request({
        method: 'GET',
        url: 'https://my-json-server.typicode.com/BinayTripathi/demo/authenticate'
    })*/
}

export default authenticateUser;