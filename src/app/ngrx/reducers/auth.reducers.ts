import { createReducer, on } from "@ngrx/store";
import { loginAction } from "../actions/auth.actions";
import {AppState} from '../AppState';

export const initialState : AppState = {
    userData: {
        email: "",
        password: ""
    }
}

export const AuthReducer = createReducer(
    initialState,
    on(loginAction, (state, {data})=>({...state, userData: data}) )
);

