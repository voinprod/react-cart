export const SET_BOOKS = "SET_BOOKS";
export const BOOKS_READY = "BOOKS_READY";
export const SET_FILTER = "SET_FILTER";

const intialState = {
    preloader: false,
    items: null,

}

export default (state = intialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                preloader: true,
            }
        case BOOKS_READY:
            return {
                ...state,
                preloader: action.payload,
            }

        default:
            return state;
    }
}