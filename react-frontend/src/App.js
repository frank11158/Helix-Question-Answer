import React, { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { NewQuestionPage, QuestionPage, Error500Page } from './pages';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={Error500Page}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/questions/new' component={NewQuestionPage} />
            <Route path='/questions' component={QuestionPage} />
            <Redirect to='/questions' />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
