import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
