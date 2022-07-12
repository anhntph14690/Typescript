
import instance from "./instance";
import { ProductTye } from "../types/product";
// import { isAuthenticate } from "../utils/localStorage";


// const { token, user } = isAuthenticate();


export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (product: ProductTye) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const update = (product: ProductTye) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}