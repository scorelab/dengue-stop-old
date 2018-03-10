import { HOME_ACTIONS } from '../constants/actionTypes';

export const updateTotalCases = (newCount) => {
  return { type: HOME_ACTIONS.UPDATE_TOTAL_CASES, payload: newCount };
};
