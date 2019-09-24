export interface UserState {
    username: string,
    password: string,
    vault: string
}

export const UPDATE_SESSION = 'UPDATE_SESSION';
interface UpdateSessionAction {
    type: typeof UPDATE_SESSION,
    payload: UserState
}

export type UserActionTypes = UpdateSessionAction;
