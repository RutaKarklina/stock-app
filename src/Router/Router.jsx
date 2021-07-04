import React from 'react';
import { Router as ReachRouter } from '@reach/router';
import Home from '../Pages/Home/Home';
import Analysis from '../Pages/Analysis/Analysis';
import { HOME, ANALYSIS } from './routes';

function Router() {
  return (
    <ReachRouter>
      <Home path={HOME} />
      <Analysis path={`${ANALYSIS}/:id`} />
    </ReachRouter>
  )
};

export default Router;