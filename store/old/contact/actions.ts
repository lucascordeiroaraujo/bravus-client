export const actionTypes = {
  LOAD_CONTACT_DATA: 'LOAD_CONTACT_DATA',
  LOAD_CONTACT_DATA_SUCCESS: 'LOAD_CONTACT_DATA_SUCCESS',
  LOAD_CONTACT_DATA_FAILURE: 'LOAD_CONTACT_DATA_FAILURE'
};

export function loadContactData() {
  return {
    type: actionTypes.LOAD_CONTACT_DATA
  };
}

export function loadContactDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_CONTACT_DATA_SUCCESS,
    data
  };
}

export function loadContactDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_CONTACT_DATA_FAILURE,
    error
  };
}
