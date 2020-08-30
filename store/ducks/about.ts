import { createReducer } from 'reduxsauce';

import creator from '../util';

import aboutState from '../interfaces/about';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_ABOUT',
  LOAD_SUCCESS: 'LOAD_SUCCESS_ABOUT',
  LOAD_FAILURE: 'LOAD_FAILURE_ABOUT'
};

export const creators = {
  getRequest: creator(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: aboutState = {
  data: null,
  loading: true,
  error: false
};

interface payload {
  type: string;
  payload: {
    description: string;
    seo_title: string;
    seo_description: string;
    seo_image: string;
  };
}

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: false
});

const success = (state = INITIAL_STATE, action: payload) => ({
  ...state,
  loading: false,
  data: action.payload
});

const failure = (state = INITIAL_STATE) => ({
  ...state,
  data: null,
  loading: false,
  error: true
});

/**
 * Sagas
 */
function* getAboutSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/52`);

    const result = yield response.json();

    yield put(creators.getSuccess(result.acf));
  } catch (err) {
    console.error(err);

    yield put(creators.getFailure(err));
  }
}

export function* aboutSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getAboutSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
