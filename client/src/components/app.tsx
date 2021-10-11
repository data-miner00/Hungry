import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Landing from '../routes/landing';
import Header from './header';
import Register from '../routes/register';
import Dashboard from '../routes/user/dashboard';
import DelicacyDetail from '../routes/user/delicacyDetails';

const App: FunctionalComponent = () => {
  return (
    <div
      id="preact_root"
      className="container border border-gray-100 border-solid min-h-screen mx-auto"
    >
      <Header />
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <Route path="/delicacy/:id" component={DelicacyDetail} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
