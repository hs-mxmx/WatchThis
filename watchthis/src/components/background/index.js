import React from 'react';
import { Background } from './styles/backgroundStyle';

export default function BackgroundContainer({ children, background = true,  ...restProps }) {
    return background ? (
        <Background { ...restProps }>{children}</Background>
    ) : children ;
};