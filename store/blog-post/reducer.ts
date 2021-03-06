import { actionTypes } from './actions';

import initialState from './state';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_BLOG_POST_DATA_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case actionTypes.LOAD_BLOG_POST_DATA_SUCCESS:
      return {
        ...state,
        ...{
          data: action.data
        }
      };

    default:
      return state;
  }
};

export default reducer;
