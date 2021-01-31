import { HeaderContainer } from "../containers/header"
import { Browser } from '../components';
import { useHistory, useLocation } from 'react-router-dom';
import { Header } from '../components';
import { Background } from '../components/background/styles/backgroundStyle';
import { NavHeader, NavUl, NavLi, Input } from '../components/header/styles/headerStyle';
import { Media } from '../components/';
import * as ROUTES from '../constants/routes';
import { BrowserContainer } from "../containers/browser";
import { MediaContainer } from "../containers/media";

export function Browse() {
    return(
        <>       
            <BrowserContainer>
            </BrowserContainer>     
        </>
    )
};