import { combineReducers } from 'redux';

import indexData from './index/reducer';

import blogData from './blog/reducer';

import contactData from './contact/reducer';

import aboutData from './about/reducer';

import safeData from './safe/reducer';

import companiesData from './safe/reducer';

const rootReducer = combineReducers({
  indexData,
  blogData,
  contactData,
  aboutData,
  safeData,
  companiesData
});

export default rootReducer;
