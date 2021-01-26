import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Signup } from './pages/signup';

import * as ROUTES from './constants/routes';
import {FormContainer} from "./containers/form";
import { FaceContainer } from './containers/face';

export default function App() {
  return  (
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Router>
  );
};

