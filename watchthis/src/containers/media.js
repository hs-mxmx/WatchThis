import React from 'react';
import { Media } from '../components';
<script src="https://kit.fontawesome.com/99c2809234.js" crossorigin="anonymous"></script>

export function MediaContainer() {
    return ( 
        <Media>
            <Media.Title>
                Films
                <Media.Tab/>
            </Media.Title>
            <Media.CarouselContainer>
            

            <Media.Carousel>
            <Media.ArrowLeft/>
                <Media.Link><img src="images/film1.jpg" height="200px" width="100%"/></Media.Link>
                <Media.Link><img src="images/film2.jpg" height="200px" width="100%"/></Media.Link>
                <Media.Link><img src="images/film3.jpg" height="200px" width="100%"/></Media.Link>
                <Media.Link><img src="images/film4.jpeg" height="200px" width="100%"/></Media.Link>
                <Media.Link><img src="images/film5.jpg" height="200px" width="100%"/></Media.Link>           
            </Media.Carousel>
            
            <Media.ArrowRight/>
            </Media.CarouselContainer>
        </Media>
    )
}