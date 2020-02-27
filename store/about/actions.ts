export const actionTypes = {
  LOAD_ABOUT_DATA: 'LOAD_ABOUT_DATA',
  LOAD_ABOUT_DATA_SUCCESS: 'LOAD_ABOUT_DATA_SUCCESS',
  LOAD_ABOUT_DATA_FAILURE: 'LOAD_ABOUT_DATA_FAILURE'
};

export function loadAboutData() {
  return {
    type: actionTypes.LOAD_ABOUT_DATA
  };
}

export function loadAboutDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_ABOUT_DATA_SUCCESS,
    data
  };
}

export function loadAboutDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_ABOUT_DATA_FAILURE,
    error
  };
}
