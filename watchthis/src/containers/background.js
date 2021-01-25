import React from 'react';
import { Background} from '../components';

export function BackgroundContainer({ children }) {
    return ( 
        <Background>
            {children}
        </Background>
    )
}