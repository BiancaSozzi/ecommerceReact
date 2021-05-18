import axiosInstance from '../config/axios'

export function getProducts() {
    return axiosInstance.get("products")
}

export function getProduct(productId) {
    return axiosInstance.get("products/" + productId)
}
