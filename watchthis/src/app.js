import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Index } from './pages/index';
import { Signup } from './pages/signup';
import { Movies } from './pages/movies';
import { Series } from './pages/series';
import { Anime } from './pages/anime';
import { Browse } from './pages/browse';
import { Profile } from './pages/profile';

export default function App() {
  return  (
    <Router>
      <Route exact path="/">
        <Index/>
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
      <Route exact path="/browse">
        <Browse/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
    </Router>
  );
};

