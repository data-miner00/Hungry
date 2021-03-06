import { FunctionalComponent, h, Fragment } from 'preact';
import { Route, Router } from 'preact-router';

import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Landing from '../routes/landing';
import Register from '../routes/register';
import Dashboard from '../routes/user/dashboard';
import DelicacyDetail from '../routes/user/delicacyDetails';
import Orders from '../routes/user/orders';
import Redirect from './redirect';
import { useSelector } from 'react-redux';

const App: FunctionalComponent = () => {
  //@ts-ignore
  const authenticated = useSelector((state) => state.auth);

  return (
    <div id="preact_root" class="bg-gray-50">
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
