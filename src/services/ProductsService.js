import {productsEndpoint} from '../config/config'

export function getProducts() {
    return fetch(productsEndpoint + "products")
    .then(res => res.json())
}

export function getProduct(productId) {
    return fetch(productsEndpoint + "products/" + productId)
    .then(res => res.json())
}
