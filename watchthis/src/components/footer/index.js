import React from 'react';
// import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer'

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};