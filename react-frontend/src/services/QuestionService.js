import { post, get, getApiUrl } from './config';

export const createQuestion = (data) =>
  post({
    url: getApiUrl('questions/'),
    payload: data,
  });

export const getQuestions = () =>
  get({
    url: getApiUrl('questions/'),
  });

const QuestionService = {
  createQuestion,
  getQuestions,
};

export default QuestionService;
