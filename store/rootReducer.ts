import { combineReducers } from 'redux';

import indexData from './index/reducer';

import contactData from './contact/reducer';

import aboutData from './about/reducer';

const rootReducer = combineReducers({
  indexData,
  contactData,
  aboutData
});

export default rootReducer;
