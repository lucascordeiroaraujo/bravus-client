import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadBlogCategoriesDataSuccess,
  loadBlogCategoriesDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const response = yield fetch(`${URL_API}/wp/v2/blog-category`);

    const result = yield response.json();

    yield put(loadBlogCategoriesDataSuccess(result));
  } catch (err) {
    yield put(loadBlogCategoriesDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_BLOG_CATEGORIES_DATA, loadDataSaga)];

export default sagas;
