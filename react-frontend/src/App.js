import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { QuestionPage, Error500Page } from './pages';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={Error500Page}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/questions' component={QuestionPage} />
            <Redirect to='/questions' />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
