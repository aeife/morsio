import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/Home/HomeView';

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={HomeView} />
    <Redirect from='*' to='/' />
  </Route>
);
