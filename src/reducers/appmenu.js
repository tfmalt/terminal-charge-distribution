
import {
  SET_APP_VIEW
} from '../actions';

const defaultState = {
    currentView: 'chart'
}

export const appmenu = (state = defaultState, action) => {
  switch (action.type) {
    case SET_APP_VIEW:
      return {
        ...state,
        currentView: action.currentView
      };
    default:
      return state;
  }
};
