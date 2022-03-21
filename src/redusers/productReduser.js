import ACTION_TYPES from "../actions/types";


const InitialState = [
    { id: 1, name: "Банан", price: 10 },
    { id: 2, name: "Яблоко", price: 8 },
    { id: 3, name: "Папайя", price: 10 }
]

function productReduser(state = InitialState, action) {
    const { type } = action;
    switch (type) {
        case ACTION_TYPES.GET_PRODUCTS:
            const { product } = state;
            return {...state,product};
         default:  return state ;
     }



}

export default productReduser;