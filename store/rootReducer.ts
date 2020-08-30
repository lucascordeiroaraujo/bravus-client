import { combineReducers } from 'redux';

import indexData from './ducks/index';

import blogData from './ducks/blog';

import blogCategoriesData from './ducks/blog-categories';

import blogPostData from './ducks/blog-post';

import contactData from './ducks/contact';

import aboutData from './ducks/about';

import safeData from './ducks/safe';

import companiesData from './ducks/safe';

import globalData from './ducks/global';

export default combineReducers({
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
