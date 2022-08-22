import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Home Page
      </Route>

      <Route exact path="/second">
        This is Second Page
      </Route>

      <Route>This is 404 Page</Route>
    </Switch>
  );
}

export default App;
