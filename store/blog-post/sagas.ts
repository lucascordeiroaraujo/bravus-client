import { put, takeLatest } from 'redux-saga/effects';

import es6promise from 'es6-promise';

import {
  actionTypes,
  loadBlogPostDataSuccess,
  loadBlogPostDataFailure
} from './actions';

import { URL_API } from '~/utils/config';

import 'isomorphic-unfetch';

es6promise.polyfill();

function* loadDataSaga(actions: any) {
  try {
    const responsePost = yield fetch(
      `${URL_API}/wp/v2/blog&slug=${actions.slug}`
    );

    const resultPost = yield responsePost.json();

    const responseAuthor = yield fetch(
      `${URL_API}/wp/v2/users/${resultPost[0].acf.author}`
    );

    const resultAuthor = yield responseAuthor.json();

    const result = {
      post: resultPost,
      author: resultAuthor
    };

    yield put(loadBlogPostDataSuccess(result));
  } catch (err) {
    yield put(loadBlogPostDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_BLOG_POST_DATA, loadDataSaga)];

export default sagas;
