import { all } from 'redux-saga/effects';

import indexSagas from './index/sagas';

import contactSagas from './contact/sagas';

function* rootSaga() {
  yield all([...indexSagas, ...contactSagas]);
}

export default rootSaga;
