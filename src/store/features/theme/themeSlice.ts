import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';

import { IThemeState } from '@store/types';

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

export default themeSlice.reducer;
