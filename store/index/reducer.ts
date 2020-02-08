import produce from "immer";

import { actionTypes } from "./actions";

import initialState from "./state";

const successLoadData = (draft: any, { data }: any) => {
  draft.placeholderData = data;
};

const failureLoadData = (draft: any, { error }: any) => {
  draft.error = error;
};

const reducer = (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOAD_DATA_SUCCESS:
        successLoadData(draft, action.payload);
        break;
      case actionTypes.LOAD_DATA_FAILURE:
        failureLoadData(draft, action.payload);
        break;
    }
  });
};

export default reducer;
