import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import UserProfile from 'containers/UserProfile/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-profile/:id" component={UserProfile} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
