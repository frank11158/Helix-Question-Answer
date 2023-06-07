import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ cardStyle = '', className = '', children }) => {
  return (
    <div className='card'>
      <div className='card__body'>{children}</div>
    </div>
  );
};

Card.propTypes = {
  cardStyle: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
