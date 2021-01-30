import React, { Children } from 'react';
import { Browser } from '../components';

export function BrowserContainer({ }) {
    return ( 
        <Browser>
            <Browser.Option>MOVIES<a href="/movies"><img src="images/moviesImage.jpg" height="600px" width="100%"></img></a></Browser.Option>
            <Browser.Option>ANIMES<a href="/movies"><img src="images/shonen-.jpg" height="600px" width="100%"></img></a></Browser.Option>
            <Browser.Option>SERIES<a href="/movies" ><img src="images/seriesimage.jpg" height="600px" width="100%"></img></a></Browser.Option>
        </Browser>
    )
}