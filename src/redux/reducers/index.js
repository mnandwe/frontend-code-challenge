import { combineReducers } from 'redux';
import { manageItems } from './item';
import { filter, sort } from './listFilter';


export const rootReducer = combineReducers({
    manageItems,
    filter,
    sort
});
