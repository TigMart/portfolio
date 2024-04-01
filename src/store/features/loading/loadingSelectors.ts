import { IRootState } from '@store/store';

export const getReducer = (state: IRootState) => state.loading;
export const getIsLoading = (state: IRootState) => getReducer(state).isLoading;
