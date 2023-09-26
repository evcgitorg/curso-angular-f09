import { createSelector, createFeatureSelector } from "@ngrx/store"
import { AppState } from "../AppState"

export const authSelectorGeneral = createFeatureSelector<AppState>('authSelector');

export const authSelector = createSelector(
    authSelectorGeneral,
    (state)=>state.userData
)