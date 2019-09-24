import {UPDATE_SESSION, UserActionTypes, UserState} from "./types/User";

export function updateSession(newSession: UserState): UserActionTypes {
    return {
        type: UPDATE_SESSION,
        payload: newSession
    }
}