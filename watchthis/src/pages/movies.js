import React, {useState, useContext, useEffect} from 'react';
import { MoviesContainer } from "../containers/movies";
import { MediaContainer } from "../containers/media";
import { HeaderContainer } from "../containers/header"
import { Header } from '../components';
import { Background } from '../components/background/styles/backgroundStyle';
import { NavHeader, NavUl, NavIl } from '../components/header/styles/headerStyle';
import * as ROUTES from '../constants/routes';
import { Media } from "../components";
export function Movies() {
    return(<>
            <HeaderContainer>
                <NavHeader>                    
                </NavHeader>
            </HeaderContainer>
            <MoviesContainer/>
        </>
    )
};