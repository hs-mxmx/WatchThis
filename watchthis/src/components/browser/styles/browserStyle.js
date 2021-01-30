import styled from 'styled-components/macro';

export const Container = styled.div`
font-family: 'Josefin Sans', sans-serif;
justify-content:center;
display:flex;
flex-direction: row;
align-items: space-between;
height: 100%;
width: 100%;

`;

export const Option = styled.div`
margin-top:180px;
font-size:20px;
color:grey;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2)
font-family: 'Josefin Sans', sans-serif;
border-radius:5%;
background-color:black;
margin-left:20px;
margin-right:20px;
display: flex;
text-align:center;
justify-content:center;
flex-direction: column;
height: 40%;
width: 350px;
&:hover {
    transition: 0.5s ease all;
    transform: scale(1.3);
    transform-origin: center;
  }

`;


