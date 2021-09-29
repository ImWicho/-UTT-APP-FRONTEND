import { ActionReducerMap } from '@ngrx/store';
import * as app from '@redux/reducers/app/app.reducers';


export interface AppState {
   app: app.State;
}



export const appReducers: ActionReducerMap<AppState> = {
   app: app.appReducer,
};
