import React, { useState, useContext, createContext } from 'react';
import {Container, Carousel, Title, CardImage, Card, Feature, FeatureImage, Box, Description, FeatureTitle, FeatureLink, FeatureData, FeatureContent} from './styles/mediaStyle';

export const FeatureContext = createContext();

export default function Media({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Media.Box = function MediaBox({ children, ...restProps}) {
    return <Box {...restProps}>{children}</Box>
}

Media.Carousel = function CardCarousel({ children, ...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{ children, showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Carousel { ...restProps}>{children}</Carousel>
        </FeatureContext.Provider>
    )
}

Media.Title = function MediaTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Media.FeatureData = function MediaFeatureData({ children, ...restProps}) {

    return <FeatureData {...restProps}>{children}</FeatureData>
}

Media.FeatureTitle = function MediaFeatureTitle({ children, ...restProps}) {
    return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Media.Description = function MediaDescription({ children, ...restProps}) {
    return <Description {...restProps}>{children}</Description>
}

Media.Card = function MediaCard({...restProps}) {
    return <Card {...restProps}></Card>

}

Media.CardImage = function MediaCardImage({...restProps}) {
    return <CardImage {...restProps}></CardImage>
}

Media.Feature = function MediaFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Media.FeatureContent = function MediaFeatureContent({ children, ...restProps}) {
    return <FeatureContent {...restProps}>{children}</FeatureContent>
}

Media.FeatureLink = function MediaFeatureLink({ children, ...restProps}) {
    return <FeatureLink {...restProps}>{children}</FeatureLink>
}

Media.FeatureImage = function MediaFeatureImage({ ...restProps}) {
    return <FeatureImage {...restProps}></FeatureImage>
}


