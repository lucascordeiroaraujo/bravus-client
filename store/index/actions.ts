export const actionTypes = {
  LOAD_INDEX_DATA: 'LOAD_INDEX_DATA',
  LOAD_INDEX_DATA_SUCCESS: 'LOAD_INDEX_DATA_SUCCESS',
  LOAD_INDEX_DATA_FAILURE: 'LOAD_INDEX_DATA_FAILURE'
};

export function loadIndexData() {
  return {
    type: actionTypes.LOAD_INDEX_DATA
  };
}

export function loadIndexDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_INDEX_DATA_SUCCESS,
    data
  };
}

export function loadIndexDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_INDEX_DATA_FAILURE,
    error
  };
}
