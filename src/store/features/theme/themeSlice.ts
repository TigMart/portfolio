import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';

import { IThemeState } from '@store/types';

import type { IRootState } from '@store/store';

const initialState: IThemeState = {
  isEnabled: false,
};

const themeSlice: Slice<IThemeState> = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsEnabled: (state, action: PayloadAction<boolean>) => {
      state.isEnabled = action.payload;
    },
  },
});

export const { setIsEnabled } = themeSlice.actions;

// Selector
const getReducer = (state: IRootState) => state.theme;
export const getThemeState = (state: IRootState) => getReducer(state).isEnabled;

export default themeSlice.reducer;
