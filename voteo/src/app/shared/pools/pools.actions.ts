import { Action } from '@ngrx/store';

export const SET_POOLS = '[POOLS] SET POOLS';

export class SetPoolsAction implements Action {
  readonly type = SET_POOLS;
  constructor(public payload: any) {}
}

export type Actions = SetPoolsAction;
