import { IRootState } from '@store/store';

export const getReducer = (state: IRootState) => state.theme;
export const getThemeState = (state: IRootState) => getReducer(state).isEnabled;
