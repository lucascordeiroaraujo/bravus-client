export const actionTypes = {
  LOAD_SAFE_DATA: 'LOAD_SAFE_DATA',
  LOAD_SAFE_DATA_SUCCESS: 'LOAD_SAFE_DATA_SUCCESS',
  LOAD_SAFE_DATA_FAILURE: 'LOAD_SAFE_DATA_FAILURE'
};

export function loadSafeData() {
  return {
    type: actionTypes.LOAD_SAFE_DATA
  };
}

export function loadSafeDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_SAFE_DATA_SUCCESS,
    data
  };
}

export function loadSafeDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_SAFE_DATA_FAILURE,
    error
  };
}
