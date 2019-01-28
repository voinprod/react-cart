import { ADD_BOOK, REMOVE_BOOK } from '../reducers/cart';
export const addToCart = (obj) => {
    return {
        type: ADD_BOOK,
        payload: obj
    }
}

export const RemoveFromCart = (id) => {
    return {
        type: REMOVE_BOOK,
        payload: id
    }
}