import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Integral from './components/Integral';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Integral} />
      </Switch>
    </HashRouter>
  );
};

export default App;
