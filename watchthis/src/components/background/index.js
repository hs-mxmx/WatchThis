import React from 'react';
import { Background } from './styles/background';

export default function BackgroundContainer({ children, background = true,  ...restProps }) {
    return background ? (
        <Background { ...restProps }>{children}</Background>
    ) : children ;
};