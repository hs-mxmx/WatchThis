import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { FaceContainer } from './containers/face';

export default function App() {
  return  (
      <FaceContainer/>
  );
};

