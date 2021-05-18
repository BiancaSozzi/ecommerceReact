import axios from 'axios'
import {productsEndpoint} from '../config/config'


const axiosInstance = axios.create({
    baseURL: productsEndpoint
})

export default axiosInstance;
