import React, {useState} from 'react';
import { Header } from '../components';
import { NavHeader, NavUl, NavLi, Input} from '../components/header/styles/headerStyle';
import * as ROUTES from '../constants/routes';
import { MediaContainer } from '../containers/media';

export function HeaderContainer() {
    const [filter, setFilter] = useState('');
    return ( 
        <>
        <Header>   
            <Header.TitleHeader>WATCHTHIS</Header.TitleHeader>
            <NavHeader>
            <Input
                        type="text"
                        autoComplete="on"
                        placeholder="Search..."
                        value={filter}
                        onChange={({ target }) => setFilter(target.value)} />
                <NavUl>
                <NavLi><Header.Link href={ROUTES.MOVIES}>Movies</Header.Link></NavLi>
                <NavLi><Header.Link href={ROUTES.SERIES}>Series</Header.Link></NavLi>
                <NavLi><Header.Link href={ROUTES.ANIME}>Animes</Header.Link></NavLi>
                <NavLi><Header.Link href={ROUTES.BROWSE}>Browse</Header.Link></NavLi>
                <NavLi><Header.Link href={ROUTES.PROFILE}>Profile</Header.Link></NavLi>
                </NavUl>                 
            </NavHeader>    
        </Header>
        {MediaContainer(filter)}
        </>
    )
}