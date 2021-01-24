import React from 'react';
// import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit, Break } from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
