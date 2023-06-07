import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page, QuestionCard } from '../components';
import { getQuestions } from '../actions/questionsActions';
import { NewQuestion } from '../components';
import { Button } from '../common';

const QuestionPage = () => {
  const { questions, loading } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions);
  }, [dispatch]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const onQuestionCreated = () => {
    console.log('Question created');
    dispatch(getQuestions);
  };

  return (
    <Page>
      <div className='page-header'>
        <Button
          onClick={() => setShowCreateModal(true)}
          color='main'
          size='sm'
          text='Ask a question'
          outline
        />
      </div>

      <NewQuestion
        active={showCreateModal}
        setActive={setShowCreateModal}
        onQuestionCreated={onQuestionCreated}
      />

      {questions &&
        questions.map((question) => (
          <div key={question.id} className='question-wrapper'>
            <QuestionCard question={question} />
          </div>
        ))}
    </Page>
  );
};

export default QuestionPage;
