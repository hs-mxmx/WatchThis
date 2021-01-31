import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: radial-gradient(ellipse farthest-corner at 1005px 1505px , #008155 12%, #004D33 24%, #002619 36%, #001C12 48%,#0c0c0c, #0c0c0c, #0c0c0c, 
            #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c, #0c0c0c);
        
        color: #333333;
        font-size: 16px;
        overflow: auto;
    }
    `;