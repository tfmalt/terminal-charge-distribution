
import apis from '../services';

export const SET_APP_VIEW = 'SET_APP_VIEW';
export const SUBMITTING_RATE = 'SUBMITTING_RATE';

export const setCurrentAppView = (currentView) => {
  return {
    type: SET_APP_VIEW,
    currentView
  };
};

export const submitNewRate = (formdata) => {
  console.log('addnewview submitNewRate', formdata);

  apis.postNewRate(formdata).then( (result) => {
    console.log('submitNewRate postNewRate: Got result from server', result);
  }).catch( (error) => {
    console.error('Got error', error);
  });

  return {
    type: SUBMITTING_RATE,
    formdata
  };
};
