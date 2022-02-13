import {createStore} from "redux";
import {rootReducer} from "./ducks";

export const Store = createStore(rootReducer);