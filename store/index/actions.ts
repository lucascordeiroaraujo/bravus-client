export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE: 'LOAD_DATA_FAILURE'
};

export function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  };
}

export function loadDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    error
  };
}
