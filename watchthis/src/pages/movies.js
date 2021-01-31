import React, {useState, useContext, useEffect} from 'react';
import { MoviesContainer } from "../containers/movies";
import { HeaderContainer } from "../containers/header"
import { Header } from '../components';
import { Background } from '../components/background/styles/backgroundStyle';
import { NavHeader, NavUl, NavIl } from '../components/header/styles/headerStyle';
import * as ROUTES from '../constants/routes';
import { Media } from "../components";
import { BrowserContainer } from '../containers/browser';

export function Movies() {

    return(<>
            <MoviesContainer/>
        </>
    )
};