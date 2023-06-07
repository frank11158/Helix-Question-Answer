import { Card } from '../common';
import userPhoto from '../assets/user_photo.jpg';

const QuestionCard = ({ question }) => {
  return (
    <Card cardStyle='dark'>
      <div className='card_container'>
        <div className='card__header'>
          <h3 className='card__headerTitle'>{question.title}</h3>
        </div>
        <div className='card__content'>
          <p className='question-body'>{question.body}</p>
        </div>
        <hr />
        <div className='card__footer'>
          <p className='card_askedby'>Asked by:</p>
          <img src={userPhoto} alt='user' className='card_photo' />
          <p className='card_user'>{question.asked_by}</p>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
