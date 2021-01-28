import React from 'react';
import {Container, CarouselContainer, Carousel, Title, Tab, Link, ArrowLeft, ArrowRight} from './styles/mediaStyle';


export default function Media({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Media.CarouselContainer = function MediaCarouselContainer({ children, ...restProps}){
    return <CarouselContainer {...restProps}>{children}</CarouselContainer>;
};

Media.Carousel = function MediaCarousel({ children, ...restProps}){
    return <Carousel {...restProps}>{children}</Carousel>;
};

Media.Title = function MediaTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};

Media.Tab = function MediaTab({ children, ...restProps}){
    return <Tab {...restProps}>{children}</Tab>;
};

Media.Link = function MediaLink({ children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
};

Media.ArrowLeft = function MediaArrowLeft({ children, ...restProps}){
    return <ArrowLeft {...restProps}><i class="fas fa-angle-left"></i></ArrowLeft>;
};

Media.ArrowRight = function MediaArrowRight({ children, ...restProps}){
    return <ArrowRight {...restProps}><i class="fas fa-angle-right"></i></ArrowRight>;
};