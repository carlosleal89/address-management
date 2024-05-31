import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AddressForm from './components/AddressForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Header />
          <Route exact path='/new-address' component={AddressForm} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
