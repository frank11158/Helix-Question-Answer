import {
  QUESTIONS_GET_REQUEST,
  QUESTIONS_GET_SUCCESS,
  QUESTIONS_GET_FAILURE,
  QUESTIONS_CREATE_REQUEST,
  QUESTIONS_CREATE_SUCCESS,
  QUESTIONS_CREATE_FAILURE,
} from '../constants/questionConstants';
import QuestionService from '../services/QuestionService';

export const getQuestions = async (dispatch) => {
  try {
    dispatch({ type: QUESTIONS_GET_REQUEST });
    const questions = await QuestionService.getQuestions();
    dispatch({
      type: QUESTIONS_GET_SUCCESS,
      payload: questions,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = (question) => async (dispatch) => {
  try {
    dispatch({ type: QUESTIONS_CREATE_REQUEST });
    const newQuestion = await QuestionService.createQuestion(question);
    dispatch({
      type: QUESTIONS_CREATE_SUCCESS,
      payload: newQuestion,
    });
  } catch (error) {
    console.log(error);
  }
};
