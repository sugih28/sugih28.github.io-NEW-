import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Background from './components/layout/Background';
import Home from './components/page/Home';
import Portofolio from './components/page/Portofolio';
import Login from './components/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/login" component={Login} />
          <Route path="/logout" ref={() => {sessionStorage.clear()}} />
        </Switch>
        <Background />
      </div>
    </BrowserRouter>
  );
}

export default App;
