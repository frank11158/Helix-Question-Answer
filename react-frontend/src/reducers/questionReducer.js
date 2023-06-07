import {
  QUESTIONS_GET_REQUEST,
  QUESTIONS_GET_SUCCESS,
  QUESTIONS_GET_FAILURE,
  QUESTIONS_CREATE_REQUEST,
  QUESTIONS_CREATE_SUCCESS,
  QUESTIONS_CREATE_FAILURE,
} from '../constants/questionConstants';

export const questionReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTIONS_GET_REQUEST:
      return { loading: true };
    case QUESTIONS_GET_SUCCESS:
      return { loading: false, questions: action.payload };
    case QUESTIONS_GET_FAILURE:
      return { loading: false, error: action.payload };
    case QUESTIONS_CREATE_REQUEST:
      return { loading: true };
    case QUESTIONS_CREATE_SUCCESS:
      return { loading: false, questions: action.payload };
    case QUESTIONS_CREATE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
