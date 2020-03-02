import { combineReducers } from 'redux';

import indexData from './index/reducer';

import blogData from './blog/reducer';

import blogCategoriesData from './blog-categories/reducer';

import blogPostData from './blog-post/reducer';

import contactData from './contact/reducer';

import aboutData from './about/reducer';

import safeData from './safe/reducer';

import companiesData from './safe/reducer';

import globalData from './global/reducer';

const rootReducer = combineReducers({
  indexData,
  blogData,
  blogCategoriesData,
  blogPostData,
  contactData,
  aboutData,
  safeData,
  companiesData,
  globalData
});

export default rootReducer;
