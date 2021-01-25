import React from 'react';
import { Footer } from '../components';
import { SocialIcon } from '../components/footer/styles/footerStyle';

export function FooterContainer() {
    return ( 
        <Footer>
            <Footer.Trivia>
                <Footer.NavLink href="https://www.youtube.com/">What is WatchThis?</Footer.NavLink>
                <Footer.NavLink>Assistance</Footer.NavLink>
                <Footer.NavLink>Privacy</Footer.NavLink>
            </Footer.Trivia>
            <Footer.SocialMedia>
                <SocialIcon src="images/067-phone.png"></SocialIcon>
                <p>+34 911 882 32 45</p>
            </Footer.SocialMedia>
            <Footer.ActualDate/>
        </Footer>
    )
}