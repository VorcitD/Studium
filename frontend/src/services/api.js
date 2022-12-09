import axios from'axios';

const api = axios.create({
    baseURL:'http://ec2-54-94-104-51.sa-east-1.compute.amazonaws.com:3333',
});

export default api;