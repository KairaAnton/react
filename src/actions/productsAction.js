import ACTION_TYPES from "./types";


export const addProduct = data => ({
    type: ACTION_TYPES.PRODUCT_ADD_SHOPCART,
    data
});

export const getProducts = data => ({
    type: ACTION_TYPES.GET_PRODUCTS,
    data
});

export const deleteFromCart = data =>({
    type: ACTION_TYPES.PRODUCT_DELETE_SHOPCART,
    data
})