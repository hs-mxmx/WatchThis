import React, { useState, useEffect} from 'react';
import { Media } from '../components';


export function MediaContainer() {
    const [featureImage, setFeatureImage] = useState('images/film2.jpg');
    return ( 
        <Media>
            <Media.Feature> 
                <Media.FeatureImage src={featureImage}/>
            </Media.Feature>
            <Media.Box>
                <Media.Carousel>
                    <Media.Card onClick={() => setFeatureImage('images/film1.jpg')}>
                        <Media.CardImage src={'images/film1.jpg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film2.jpg')}>
                        <Media.CardImage src={'images/film2.jpg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film3.jpg')}>
                        <Media.CardImage src={'images/film3.jpg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film4.jpeg')}>
                        <Media.CardImage src={'images/film4.jpeg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film5.jpg')}>
                        <Media.CardImage src={'images/film5.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film2.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film3.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film5.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film4.jpeg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film1.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film2.jpg'}/>
                    </Media.Card>
                </Media.Carousel>
            </Media.Box>
        </Media>
    )
}