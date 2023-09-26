import {createAction, props} from '@ngrx/store';

export const loginAction = createAction('LoginComponent::onLogin', props<{data: object}>());