import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadIndexDataSuccess,
  loadIndexDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/7`);

    const result = yield response.json();

    yield put(loadIndexDataSuccess(result));
  } catch (err) {
    yield put(loadIndexDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_INDEX_DATA, loadDataSaga)];

export default sagas;
