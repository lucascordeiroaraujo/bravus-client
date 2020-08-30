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

    const responseRelateds = yield fetch(
      `${URL_API}/bravus/relatedPosts/${resultPost[0].id}/${resultPost[0]['blog-category'][0]}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }
    );

    const resultRelateds = yield responseRelateds.json();

    const result = {
      post: resultPost,
      author: resultAuthor,
      relateds: resultRelateds,
      teste: resultPost[0]['blog-category'][0]
    };

    yield put(loadBlogPostDataSuccess(result));
  } catch (err) {
    yield put(loadBlogPostDataFailure(true));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_BLOG_POST_DATA, loadDataSaga)];

export default sagas;
