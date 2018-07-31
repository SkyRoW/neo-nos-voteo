import * as pools from './pools.actions';

export interface State {
  pools: any;
}

export const initialState: State = {
  pools: []
};

export function reducer(state = initialState, action: pools.Actions): State {
  switch (action.type) {
    case pools.SET_POOLS: {
      return {
        ...state,
        pools: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getTableColumns = (state: State) => state.pools;
