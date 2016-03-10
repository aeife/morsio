import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/Home';
import GeneratedView from 'views/Generated';
import ShareView from 'views/Share';
import AboutView from 'views/About';

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={HomeView} />
    <Route path='generated' component={GeneratedView} />
    <Route path='about' component={AboutView} />
    <Route path=':urlId' component={ShareView} />
    <Redirect from='*' to='/' />
  </Route>
);
