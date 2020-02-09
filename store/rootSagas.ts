import { all } from 'redux-saga/effects';

import indexSagas from './index/sagas';

function* rootSaga() {
  yield all([...indexSagas]);
}

export default rootSaga;
