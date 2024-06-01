import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NewAddress from './pages/NewAddress';
import Home from './pages/Home';
import EditAddress from './pages/EditAddress';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/new-address' component={NewAddress} />
          <Route exact path='/edit-address/:id' component={EditAddress} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
