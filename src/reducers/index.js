import productReducer from "./productReducer";
import { combineReducers } from "redux";
import typeReducer from "./typeReducer";

const rootReducer = combineReducers({
    product: productReducer,
    type: typeReducer,
});

export default rootReducer;