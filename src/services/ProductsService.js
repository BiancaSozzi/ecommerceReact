// import axiosInstance from '../config/axios'
import firebase from '../config/firebase'

export function getProducts() {
    // return axiosInstance.get("products")
    return firebase.db.collection("products").get()

}

export function getProduct(productId) {
    // return axiosInstance.get("products/" + productId)
    return firebase.db.doc("products/" + productId).get()
}

export function updateProduct(productId, data) {
    return firebase.db.doc("products/" + productId)
        .set({
            name: data.name,
            price: data.price,
            sku: data.sku,
            image: data.image,
            details: data.details,
            description: data.description,
            available: data.available
        }, {merge: true})
}

export function deleteProduct(productId) {
    return firebase.db.doc("products/" + productId).delete()
}

export function createProduct(data) {
    return firebase.db.collection("products")
    .add({
        name: data.name,
        price: data.price,
        sku: data.sku,
        image: data.image,
        details: data.details,
        description: data.description,
        available: data.available
    })
}
