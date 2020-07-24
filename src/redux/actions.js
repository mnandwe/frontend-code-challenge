import {CREATE_ITEM, REMOVE_ITEM, FILTER_ITEMS, SORT_ITEMS} from './actionTypes'

export const createItem = (item) => {
    return { type: CREATE_ITEM, item };
};
export const removeItem = (item) => {
    return { type: REMOVE_ITEM, item };
};
export const setFilter = (category) => {
    return { type: FILTER_ITEMS, category };
};
export const setSortParameters = (sortBy) => {
    return { type: SORT_ITEMS, sortBy };
};
