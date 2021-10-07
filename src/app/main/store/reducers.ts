/* eslint-disable no-underscore-dangle */
import { Action, createReducer, on } from '@ngrx/store';
import { saveUser } from './actions';

export interface State {
    key: string | null;
}

export const initialState: State = {
   key: 'LUIS',
};

const _userReducerReducer = createReducer(initialState,

    on(saveUser, (state, { key }) => ({ ...state, key })),

);

export const userReducerReducer = (state: any, action: Action) => _userReducerReducer(state, action);
