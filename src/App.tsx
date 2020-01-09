import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
// import { HashRouter } from 'react-router-dom';

import Integral from './components/Integral';

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="/" exact component={Integral} />
      </Switch>
    </MemoryRouter>
  );
};

export default App;
