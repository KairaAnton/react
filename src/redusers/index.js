import { combineReducers } from "redux";
import productReduser from "./productReduser";
import shopCartReduser from "./shopCartReducer";


const rootReducer = combineReducers({
    product: productReduser,
    shopCart: shopCartReduser
})

export default rootReducer;