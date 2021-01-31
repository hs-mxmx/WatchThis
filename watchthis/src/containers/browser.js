import React, {useState, useEffect} from 'react';
import { Browser } from '../components';
import { NavHeader, NavUl, NavLi, Input } from '../components/header/styles/headerStyle';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { Background } from '../components/background/styles/backgroundStyle';
import { useHistory } from 'react-router-dom';
import { MediaContainer } from "../containers/media";
import { HeaderContainer } from './header';


export function BrowserContainer({ }) {
    return ( 
        <>
            <HeaderContainer/>
            <Browser>
                <Browser.Option>
                    <Browser.OptionTitle>MOVIES</Browser.OptionTitle>
                    <Browser.OptionContainer href="/movies">
                        <Browser.OptionImage src="images/moviesImage.jpg"></Browser.OptionImage>
                    </Browser.OptionContainer> 
                </Browser.Option>
                <Browser.Option>
                    <Browser.OptionTitle>SERIES</Browser.OptionTitle>
                    <Browser.OptionContainer href="/movies">
                        <Browser.OptionImage src="images/seriesimage.jpg"></Browser.OptionImage>
                    </Browser.OptionContainer> 
                </Browser.Option>
                <Browser.Option>
                    <Browser.OptionTitle>ANIMES</Browser.OptionTitle>
                    <Browser.OptionContainer href="/movies">
                        <Browser.OptionImage src="images/shonen-.jpg"></Browser.OptionImage>
                    </Browser.OptionContainer> 
                </Browser.Option>
            </Browser>
        
    </>
    )
}