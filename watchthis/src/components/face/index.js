import React from 'react';
import { Container } from './styles/face';


export default function Face({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}