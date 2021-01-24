import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
// import { Background, ButtonLink, Container, Logo } from './styles/header';

export default function Header({ children, background = true,  ...restProps }) {
    return background ? (
        <Background { ...restProps }>{children}</Background>
    ) : children ;
};
