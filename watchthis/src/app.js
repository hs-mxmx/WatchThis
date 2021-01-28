import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Signup } from './pages/signup';
import { Browse } from './pages/browse';
import { Index } from './pages/index';
import { Movies } from './pages/movies';

import * as ROUTES from './constants/routes';
import {FormContainer} from "./containers/form";
import { FaceContainer } from './containers/face';

export default function App() {
  return  (
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/browse">
          <Browse/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
      </Router>
  );
};

