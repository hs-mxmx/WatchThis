import { HeaderContainer } from "../containers/header"
import { Browser } from '../components';
import { useHistory, useLocation } from 'react-router-dom';
import { Header } from '../components';
import { Background } from '../components/background/styles/backgroundStyle';
import { NavHeader, NavUl, NavIl } from '../components/header/styles/headerStyle';
import { Media } from '../components/';
import * as ROUTES from '../constants/routes';
import { BrowserContainer } from "../containers/browser";

export function Browse() {
    return(
        <>            
            <HeaderContainer>
                <NavHeader>
                                       
                </NavHeader>
            </HeaderContainer>
            <Background>
                <BrowserContainer>
                </BrowserContainer>
            </Background>
        </>
    )
};