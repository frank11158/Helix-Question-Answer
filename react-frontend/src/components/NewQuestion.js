import { useState } from 'react';
import QuestionService from '../services/QuestionService';
import { Button } from '../common';

const NewQuestion = ({ active, setActive, onQuestionCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const closeModal = () => {
    setActive(false);
    setError('');
  };

  const createQuestion = async (e) => {
    e.preventDefault();

    if (title.trim() === '' || body.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    const question = {
      title: title,
      body: body,
    };
    await QuestionService.createQuestion(question);
    setTitle('');
    onQuestionCreated();
    closeModal();
  };

  return (
    <div>
      {active && (
        <div className='modal'>
          <div className='container'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>
                &times;
              </span>
              <h3 className='modal-header'>New Question</h3>
              <form onSubmit={createQuestion}>
                <label>
                  <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter the question title'
                  />
                </label>

                <label>
                  <textarea
                    type='text'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder='Write your question here'
                  >
                    {' '}
                  </textarea>
                </label>

                <Button
                  type='submit'
                  color='sub'
                  size='sm'
                  text='Post'
                  outline
                />

                {error && <p className='validation'>{error}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewQuestion;
