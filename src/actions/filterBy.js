import { SET_FILTER, SET_QUERY } from "../reducers/filter";

export const setFilter = (filterBy) => ({
    type: SET_FILTER,
    payload: filterBy
})
export const setSearchQuery = (query) => ({
    type: SET_QUERY,
    payload: query
})