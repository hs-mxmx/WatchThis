import React from 'react';
import { Container, Title, Subtitle } from './styles/face';


export default function Face({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Face.Title = function FaceTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};

Face.Subtitle = function FaceSubtitle({ children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>;
};
