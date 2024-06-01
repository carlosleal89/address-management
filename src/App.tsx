import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NewUser from './pages/NewUser';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/new-address' component={NewUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
