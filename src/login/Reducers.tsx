
import {UserActionTypes, UserState, UPDATE_SESSION} from "./types/User";

const initialState: UserState = {
    username: "",
    password: "",
    vault: ""
}

export function userStateReducer(
    state = initialState,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case "UPDATE_SESSION":{
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}