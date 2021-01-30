import React, {useState, useContext, useEffect} from 'react';
import { MediaContainer } from "../containers/media";
import { HeaderContainer } from "../containers/header"
import { Header } from '../components';
import { Background } from '../components/background/styles/backgroundStyle';
import { NavHeader, NavUl, NavIl } from '../components/header/styles/headerStyle';
import * as ROUTES from '../constants/routes';
import { Media } from "../components";
export function Movies() {

    return(<>
            <Media.Title>MOVIES</Media.Title>

           <HeaderContainer>
                <NavHeader>                    
                </NavHeader>
            </HeaderContainer>
            <MediaContainer/>
        </>
    )
};