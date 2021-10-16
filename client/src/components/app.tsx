import { FunctionalComponent, h, Fragment } from 'preact';
import { Route, Router } from 'preact-router';

import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Landing from '../routes/landing';
import Register from '../routes/register';
import Dashboard from '../routes/user/dashboard';
import DelicacyDetail from '../routes/user/delicacyDetails';
import Orders from '../routes/user/orders';
import { useState } from 'preact/hooks';
import Redirect from './redirect';

const App: FunctionalComponent = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div id="preact_root">
      {!authenticated ? (
        <Router>
          <Route path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <NotFoundPage default />
        </Router>
      ) : (
        <Router>
          <Redirect path="/register" to="/" />
          <Route path="/" component={Dashboard} />
          <Route path="/profile/" component={Profile} user="me" />
          <Route path="/profile/:user" component={Profile} />
          <Route path="/delicacy/:id" component={DelicacyDetail} />
          <Route path="/orders" component={Orders} />
          <NotFoundPage default />
        </Router>
      )}
    </div>
  );
};

export default App;
