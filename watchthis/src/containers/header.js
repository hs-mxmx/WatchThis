import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../components';
import { NavHeader, NavUl, NavLi, Input} from '../components/header/styles/headerStyle';
import * as ROUTES from '../constants/routes';

export function HeaderContainer() {
    return ( 
        <Header>   
            <Header.TitleHeader>WATCHTHIS</Header.TitleHeader>
            <NavHeader>
                <Input type="search" placeholder="Search..."></Input>
                <NavUl>
                  <NavLi><Header.Link href={ROUTES.MOVIES}>Movies</Header.Link></NavLi>
                  <NavLi><Header.Link href={ROUTES.MOVIES}>Series</Header.Link></NavLi>
                  <NavLi><Header.Link href={ROUTES.MOVIES}>Anime</Header.Link></NavLi>
                  <NavLi><Header.Link href={ROUTES.BROWSE}>Browse</Header.Link></NavLi>
                  <NavLi><Header.Link href={ROUTES.MOVIES}>Profile</Header.Link></NavLi>
                      
                </NavUl>                 
            </NavHeader>    
        </Header>
    )
}