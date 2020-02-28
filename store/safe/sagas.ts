import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadSafeDataSuccess,
  loadSafeDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/135`);

    const result = yield response.json();

    yield put(loadSafeDataSuccess(result));
  } catch (err) {
    yield put(loadSafeDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_SAFE_DATA, loadDataSaga)];

export default sagas;
