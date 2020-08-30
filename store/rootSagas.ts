import { all, fork } from 'redux-saga/effects';

import { indexSagas } from './ducks/index';

import { blogSagas } from './ducks/blog';

import { blogCategoriesSagas } from './ducks/blog-categories';

import { blogPostSagas } from './ducks/blog-post';

import { contactSagas } from './ducks/contact';

import { aboutSagas } from './ducks/about';

import { safeSagas } from './ducks/safe';

import { companiesSagas } from './ducks/companies';

function* rootSaga() {
  yield all([
    fork(indexSagas),
    fork(blogSagas),
    fork(blogCategoriesSagas),
    fork(blogPostSagas),
    fork(contactSagas),
    fork(aboutSagas),
    fork(safeSagas),
    fork(companiesSagas)
  ]);
}

export default rootSaga;
