import { createAction, props } from '@ngrx/store';

export const saveUser = createAction('[SAVE USER] saveUser',
  props<{key: string}>());
