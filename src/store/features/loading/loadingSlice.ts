import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

import { ILoading } from '@store/types';

const initialState: ILoading = {
  isLoading: true,
};

const loadingSlice: Slice<ILoading> = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
