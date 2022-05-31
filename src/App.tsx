import { Switch, Route } from '@modern-js/runtime/router';
import { IndexPage, LoginPage } from './pages';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import './App.css';

const App = () => (
  <div className="w-full h-full position: absolute">
    <Switch>
      <Route exact={true} path="/">
        <IndexPage />
      </Route>
      <Route exact={true} path="/login">
        <LoginPage />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </div>
);

export default App;
