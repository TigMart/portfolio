import { combineReducers } from '@reduxjs/toolkit';

import themeSlice from './features/theme/themeSlice';
import loadingSlice from './features/loading/loadingSlice';

const rootReducer = combineReducers({
  theme: themeSlice,
  loading: loadingSlice,
});

export default rootReducer;
