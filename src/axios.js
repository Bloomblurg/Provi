import Axios from 'axios';

let devURL = "http://localhost:8080/";
let prodURL = "https://prov.bbt.run/";

export default Axios.create({
    baseURL: process.env.NODE_ENV !== 'production' ? devURL : prodURL,
    timeout: 30000,
})