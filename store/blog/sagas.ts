import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadBlogDataSuccess,
  loadBlogDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga(actions: any) {
  try {
    if (actions.category === '') {
      const response = yield fetch(`${URL_API}/wp/v2/blog`);

      const result = yield response.json();

      yield put(loadBlogDataSuccess(result));
    } else if (actions.category) {
      const responseCat = yield fetch(
        `${URL_API}/wp/v2/blog-category&slug=${actions.category}`
      );

      const resultCat = yield responseCat.json();

      const response = yield fetch(
        `${URL_API}/wp/v2/blog&blog-category=${resultCat[0].id}`
      );

      const result = yield response.json();

      yield put(loadBlogDataSuccess(result));
    }
  } catch (err) {
    yield put(loadBlogDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_BLOG_DATA, loadDataSaga)];

export default sagas;
