import { HOME_ACTIONS } from '../constants/actionTypes';

const initialState = {
    totalCases: 67456
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case HOME_ACTIONS.UPDATE_TOTAL_CASES: {
            return { ...state, totalCases: action.payload };
        }
        default:
            return state;
    }
}

export default homeReducer;