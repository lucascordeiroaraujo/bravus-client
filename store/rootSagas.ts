import { all } from 'redux-saga/effects';

import indexSagas from './index/sagas';

import contactSagas from './contact/sagas';

import aboutSagas from './about/sagas';

function* rootSaga() {
  yield all([...indexSagas, ...contactSagas, ...aboutSagas]);
}

export default rootSaga;
