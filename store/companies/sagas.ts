import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadCompaniesDataSuccess,
  loadCompaniesDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/138`);

    const result = yield response.json();

    yield put(loadCompaniesDataSuccess(result));
  } catch (err) {
    yield put(loadCompaniesDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_COMPANIES_DATA, loadDataSaga)];

export default sagas;
