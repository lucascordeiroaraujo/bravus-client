import { combineReducers } from 'redux';

import indexData from './index/reducer';

import contactData from './contact/reducer';

const rootReducer = combineReducers({
  indexData,
  contactData
});

export default rootReducer;
