import { actionTypes } from './actions';

import initialState from './state';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LOADER:
      return {
        ...state,
        label: action.text,
        loader: action.loader,
        error: action.error
      };

    default:
      return state;
  }
};

export default reducer;
