import React, { useState, useContext, createContext } from 'react';
import {Container, Carousel, Title, Item, CardImage, Card, Feature, FeatureImage, Box, FeatureTitle, FeatureDescription, FeatureLink} from './styles/mediaStyle';

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

Media.Title = function CardTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Media.Card = function MediaCard({...restProps}) {
    return <Card {...restProps}></Card>

}

Media.CardImage = function MediaCardImage({...restProps}) {
    return <CardImage {...restProps}></CardImage>
}

Media.Item = function CardItem({ item, children, ...restProps}) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item 
            onClick={() => {
                /*setIteamFeature(item);*/
                setShowFeature(true);
            }}
            { ...restProps}
        >
            {children}
        </Item>
    )
}

Media.Feature = function MediaFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Media.FeatureImage = function MediaFeatureImage({...restProps}) {
    return <FeatureImage {...restProps}></FeatureImage>
}
