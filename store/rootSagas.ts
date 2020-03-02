import { all } from 'redux-saga/effects';

import indexSagas from './index/sagas';

import blogSagas from './blog/sagas';

import blogCategoriesSagas from './blog-categories/sagas';

import blogPostSagas from './blog-post/sagas';

import contactSagas from './contact/sagas';

import aboutSagas from './about/sagas';

import safeSagas from './safe/sagas';

import companiesSagas from './companies/sagas';

function* rootSaga() {
  yield all([
    ...indexSagas,
    ...blogSagas,
    ...blogCategoriesSagas,
    ...blogPostSagas,
    ...contactSagas,
    ...aboutSagas,
    ...safeSagas,
    ...companiesSagas
  ]);
}

export default rootSaga;
