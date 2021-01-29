import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Index } from './pages/index';
import { Home } from './pages/home';
import { Signup } from './pages/signup';
import { Movies } from './pages/movies';
import { Series } from './pages/series';
import { Anime } from './pages/anime';

export default function App() {
  return  (
    <Router>
      <Route exact path="/">
        <Index/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/movies">
        <Movies/>
      </Route>
      <Route exact path="/series">
        <Series/>
      </Route>
      <Route exact path="/anime">
        <Anime/>
      </Route>
    </Router>
  );
};

