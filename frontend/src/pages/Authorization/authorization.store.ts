import { createAction, createReducer, createAsyncThunk, ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface AuthorizationState {
    userToken: string;
}

const initialState: AuthorizationState = {
    userToken: ''
}

export const setToken: ActionCreatorWithPayload<string> = createAction('authorization/setToken')

export interface SignInPayload {
    phone: string;
}
export const SignIn = createAsyncThunk<any, SignInPayload>('authorization/SignIn', async ({ phone }) => {
    console.log(phone)
    return 1
})

export default createReducer(initialState, {
    [setToken.type]: (state, action) => ({ ...state, userToken: action.payload })
})