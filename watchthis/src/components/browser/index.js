import React from 'react';
import { Container, Option } from './styles/browserStyle';


export default function Browser({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Browser.Option = function BrowserOption({ children, ...restProps}){
    return <Option {...restProps}>{children}</Option>;
};

