export const actionTypes = {
  LOAD_COMPANIES_DATA: 'LOAD_COMPANIES_DATA',
  LOAD_COMPANIES_DATA_SUCCESS: 'LOAD_COMPANIES_DATA_SUCCESS',
  LOAD_COMPANIES_DATA_FAILURE: 'LOAD_COMPANIES_DATA_FAILURE'
};

export function loadCompaniesData() {
  return {
    type: actionTypes.LOAD_COMPANIES_DATA
  };
}

export function loadCompaniesDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_COMPANIES_DATA_SUCCESS,
    data
  };
}

export function loadCompaniesDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_COMPANIES_DATA_FAILURE,
    error
  };
}
