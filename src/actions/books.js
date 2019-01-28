import { SET_BOOKS } from "../reducers/books";

export function setBook(book) {
    return {
        type: SET_BOOKS,
        payload: book
    }
}