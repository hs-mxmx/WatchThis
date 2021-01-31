import React from 'react';
import { Container, Option, OptionImage, OptionContainer, OptionTitle } from './styles/browserStyle';


export default function Browser({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Browser.Option = function BrowserOption({ children, ...restProps }){
    return <Option {...restProps}>{children}</Option>;
};

Browser.OptionImage = function BrowserOptionImage({ ...restProps }){
    return <OptionImage {...restProps}></OptionImage>;
};

Browser.OptionContainer = function BrowserOptionContainer({ children, ...restProps }){
    return <OptionContainer {...restProps}>{children}</OptionContainer>;
};

Browser.OptionTitle = function BrowserOptionTitle({ children, ...restProps }){
    return <OptionTitle {...restProps}>{children}</OptionTitle>;
};
