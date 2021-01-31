import React from 'react';
import { HeaderContainer, TitleHeader, Link, NavLi, NavUl, 
    NavHeader, Input, Subtitle, ListGroup, ListResult, ListResultImage, ListResultTitle} from './styles/headerStyle';
import { Link as ReactRouterLink } from 'react-router-dom';
// import { Background, ButtonLink, Container, Logo } from './styles/header';
import { Background } from './styles/headerStyle';
import * as ROUTES from '../../constants/routes';


export default function Header ({ children, ...restProps }) {
    return  <HeaderContainer { ...restProps }>{children}</HeaderContainer>;
}

Header.NavHeader= function HeaderNavHeader ({ children, ...restProps}){
    return <NavHeader placeholder="Search something..." {...restProps}>{children}</NavHeader>;
};

Header.NavUl= function HeaderNavUl ({ children, ...restProps}){
    return <NavUl {...restProps}>{children}</NavUl>;
};

Header.NavLi= function HeaderNavLi ({ children, ...restProps}){
    return <NavLi {...restProps}>{children}</NavLi>;
}

Header.TitleHeader = function HeaderTitleHeader ({ children, ...restProps}){
    return <TitleHeader {...restProps} href={ROUTES.BROWSE}>{children}</TitleHeader>;
};

Header.Link = function HeaderLink ({ children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
};

Header.Input = function HeaderInput ({ children, ...restProps}){
    return <Input {...restProps}>{children}</Input>;
};

Header.ListGroup = function HeaderListGroup ({ children, ...restProps}){
    return <ListGroup {...restProps}>{children}</ListGroup>;
};

Header.ListResult = function HeaderListResult ({ children, ...restProps}){
    return <ListResult {...restProps}>{children}</ListResult>;
};

Header.ListResultImage = function HeaderListResultImage ({ children, ...restProps}){
    return <ListResultImage {...restProps}>{children}</ListResultImage>;
};

Header.ListResultTitle = function HeaderListResultTitle ({ children, ...restProps}){
    return <ListResultTitle {...restProps}>{children}</ListResultTitle>;
};
