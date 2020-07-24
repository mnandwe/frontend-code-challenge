import { CREATE_ITEM, REMOVE_ITEM } from '../actionTypes';

const addCategory = (categoryList, newCategory) => {
    if (categoryList.indexOf(newCategory) > -1) {
        return [
            ...categoryList
        ];
    }
    return [
        ...categoryList,
        newCategory
    ];
}
const removeCategory = (categoryList, newCategory) => {
    return categoryList.filter(cat => cat !== newCategory);
}


const removeItem = (itemList, oldItem) => {
    return itemList.filter((item) => {
        return !(item.item === oldItem.item
            && item.category === oldItem.category
            && item.price === oldItem.price);
    });
}


export const manageItems = (state = { categories: [''], items: [] }, action) => {
    switch (action.type) {
        case CREATE_ITEM:
            return {
                categories: addCategory(state.categories, (action.item.category).toLowerCase()),
                items: [
                    ...state.items,
                    action.item
                ]
            }
        case REMOVE_ITEM:
            return {
                categories: removeCategory(state.categories, (action.item.category).toLowerCase()),
                items: removeItem(state.items, action.item)
            }
        default:
            return state
    }
};
