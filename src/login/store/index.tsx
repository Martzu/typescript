import {combineReducers, createStore} from "redux";
import {userStateReducer} from "../Reducers";

const rootReducer = combineReducers({
    currentUser: userStateReducer
});

export type AppState = ReturnType<typeof rootReducer>