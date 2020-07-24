import { SORT_ITEMS, FILTER_ITEMS } from '../actionTypes';

export const filter = (state = 'all', action) => {
    switch (action.type) {
        case FILTER_ITEMS:
            return action.category;
        default:
            return state;
    }
};

export const sort = (state = { by: '', order: '' }, action) => {
    switch (action.type) {
        case SORT_ITEMS:
            return setSortParams(action.sortBy, state);
        default:
            return state;
    }
};
const setSortParams = (field, oldParams) => {
    const params = {
        by: field,
        order: 'ASC',
    };
    if (oldParams.order === '') {
        return params;
    }
    if (params.order === oldParams.order && params.by === oldParams.by) {
        params.order = 'DESC';
    }

    return params;
}