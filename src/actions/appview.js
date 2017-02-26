
export const SET_APP_VIEW = 'SET_APP_VIEW';

export const setCurrentAppView = (currentView) => {
  return {
    type: SET_APP_VIEW,
    currentView
  };
};
