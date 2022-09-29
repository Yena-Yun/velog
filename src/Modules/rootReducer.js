import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { getCardReducer } from './getCard';
import { getBodyReducer } from './getBody';
import { currentCommentReducer } from './currentComment';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['getCardReducer'],
};

const rootReducer = combineReducers({
  getCardReducer,
  getBodyReducer,
  currentCommentReducer,
});

export default persistReducer(persistConfig, rootReducer);
