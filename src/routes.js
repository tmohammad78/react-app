import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Order from './pages/order';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path='/order' component={Order} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
