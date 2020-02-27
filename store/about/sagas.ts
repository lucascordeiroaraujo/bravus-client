import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadAboutDataSuccess,
  loadAboutDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/52`);

    const result = yield response.json();

    yield put(loadAboutDataSuccess(result));
  } catch (err) {
    yield put(loadAboutDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_ABOUT_DATA, loadDataSaga)];

export default sagas;
