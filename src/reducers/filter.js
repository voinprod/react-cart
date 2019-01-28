
export const SET_FILTER = "SET_FILTER";
export const SET_QUERY = "SET_QUERY";
const intialState = {
    searchQuery: '',
    filterBy: 'all',
}

export default (state = intialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            }
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload,
            }
        default:
            return state;
    }
}