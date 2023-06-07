import React from 'react';
import { Link } from 'react-router-dom';

const Error500Page = ({ error }) => (
  <div className='error500page'>
    Internal Server Error
    <div className='error500page__code'>
      <pre>
        <code>{error.message}</code>
      </pre>
    </div>
  </div>
);

export default Error500Page;
