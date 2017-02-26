import {
  SUBMITTING_RATE,
  RECEIVED_SUBMIT_FEEDBACK
} from '../actions';

const defaultState = {
  isSubmitting: false,
  formdata: {},
  receivedAt: null,
  resultdata: {}
};

export const addrate = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMITTING_RATE:
      return {
        ...state,
        isSubmitting: true,
        formdata: action.formdata
      };
    case RECEIVED_SUBMIT_FEEDBACK:
      return ()
    default:
      return state
  }
};
