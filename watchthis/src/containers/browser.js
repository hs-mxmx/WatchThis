import React from 'react';
import { Browser } from '../components';
import * as ROUTES from '../constants/routes';

import { HeaderContainer } from './header';

export function BrowserContainer({ }) {
    return ( 
        <>
        <HeaderContainer/>
        <Browser>
            <Browser.Option>
                <Browser.OptionTitle>MOVIES</Browser.OptionTitle>
                <Browser.OptionContainer href={ROUTES.MOVIES}>
                    <Browser.OptionImage src="images/moviesImage.jpg"></Browser.OptionImage>
                </Browser.OptionContainer> 
            </Browser.Option>
            <Browser.Option>
                <Browser.OptionTitle>SERIES</Browser.OptionTitle>
                <Browser.OptionContainer href={ROUTES.SERIES}>
                    <Browser.OptionImage src="images/seriesimage.jpg"></Browser.OptionImage>
                </Browser.OptionContainer> 
            </Browser.Option>
            <Browser.Option>
                <Browser.OptionTitle>ANIMES</Browser.OptionTitle>
                <Browser.OptionContainer href={ROUTES.ANIME}>
                    <Browser.OptionImage src="images/shonen-.jpg"></Browser.OptionImage>
                </Browser.OptionContainer> 
            </Browser.Option>
        </Browser>
        </>
    )
}