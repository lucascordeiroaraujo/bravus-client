import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes, loadDataSuccess, loadDataFailure } from './actions';

import { URL_API } from '~/utils/config';

function* loadDataSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/7`);
    const result = yield response.json();
    yield put(loadDataSuccess(result));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_DATA, loadDataSaga)];

export default sagas;
