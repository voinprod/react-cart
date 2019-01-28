export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

const intialState = {
    items: [],
}

export default (state = intialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ]
            }
        case REMOVE_BOOK:
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload),
            }
        default:
            return state;
    }
}