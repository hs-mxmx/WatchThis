import React from 'react';
import {Container, ActualDate, Trivia, SocialMedia, NavLink} from './styles/footerStyle';


export default function Footer({ children, ...restProps }) {
    
    return <Container {...restProps}>{children}</Container>;
}

Footer.ActualDate = function FooterActualDate({children, ...restProps}) {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return <ActualDate {...restProps}>{today}</ActualDate>
}

Footer.Trivia = function FooterTrivia({children, ...restProps}) {
    return <Trivia {...restProps}>{children}
    </Trivia>
}

Footer.SocialMedia = function FooterSocialMedia({children, ...restProps}) {
    return <SocialMedia {...restProps}>{children}</SocialMedia>
}

Footer.NavLink = function FooterNavLink({children, ...restProps}) {
    return <NavLink {...restProps}>{children}
    </NavLink>
}