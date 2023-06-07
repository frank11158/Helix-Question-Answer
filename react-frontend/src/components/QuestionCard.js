import { Card } from '../common';

const QuestionCard = ({ question }) => {
  return (
    <Card cardStyle='dark'>
      <h2>{question.title}</h2>
      <p>{question.body}</p>
      <p>Asked by: {question.asked_by}</p>
    </Card>
  );
};

export default QuestionCard;
