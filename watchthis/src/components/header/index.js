import React from 'react';
import { HeaderContainer, TitleHeader, Link, NavLi, NavUl, NavHeader, Input, Subtitle } from './styles/headerStyle';
import { Link as ReactRouterLink } from 'react-router-dom';
// import { Background, ButtonLink, Container, Logo } from './styles/header';
import { Background } from './styles/headerStyle';


export default function Header ({ children, ...restProps }) {
    return  <HeaderContainer { ...restProps }>{children}</HeaderContainer>;
}




Header.NavHeader= function HeaderNavHeader ({ children, ...restProps}){
    return <NavHeader {...restProps}>{children}</NavHeader>;
};
Header.NavUl= function HeaderNavUl ({ children, ...restProps}){
    return <NavUl {...restProps}>{children}</NavUl>;
};
Header.NavLi= function HeaderNavLi ({ children, ...restProps}){
    return <NavLi {...restProps}>{children}</NavLi>;
}
Header.TitleHeader = function HeaderTitleHeader ({ children, ...restProps}){
    return <TitleHeader {...restProps}>{children}</TitleHeader>;
};

Header.Link = function HeaderLink ({ children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
};
Header.Input = function HeaderInput ({ children, ...restProps}){
    return <Input {...restProps}>{children}</Input>;
};