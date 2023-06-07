import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page, QuestionCard } from '../components';
import { getQuestions } from '../actions/questionsActions';

const QuestionPage = () => {
  const { questions, loading } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions);
  }, [dispatch]);

  return (
    <Page>
      <section>
        {questions &&
          questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        {/* <h1>Questions</h1> */}
      </section>
    </Page>
  );
};

export default QuestionPage;
