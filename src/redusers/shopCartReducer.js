import ACTION_TYPES from "../actions/types";

function shopCartReduser(state = [], action) {
    const { type, product } = action;
    switch (type) {
        case ACTION_TYPES.PRODUCT_ADD_SHOPCART: {
            const aer = state.find(p => product.id === p.id);
            if (aer) {
                return [...state];
            }
            return [...state, product];

        };

        case ACTION_TYPES.PRODUCT_DELETE_SHOPCART: {
            const { p } = action;
            const newProducts = state.filter(prod => prod.id !== p.id)
            return [...newProducts]
        };

        default: return [...state];
    };
};

export default shopCartReduser;
