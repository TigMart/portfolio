import { combineReducers } from '@reduxjs/toolkit';

import themeSlice from './features/theme/themeSlice';

const rootReducer = combineReducers({
  theme: themeSlice,
});

export default rootReducer;
