import styled from 'styled-components/macro';

export const Container = styled.div`
font-family: 'Josefin Sans', sans-serif;
justify-content:center;
display:flex;
flex-direction: row;
align-items: space-between;
height: 100vh;
width: 100%;

`;

export const Option = styled.div`
margin-top:180px;
font-size:20px;
color:grey;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2)
font-family: 'Josefin Sans', sans-serif;
border-radius:5%;
margin-left:20px;
margin-right:20px;
display: flex;
text-align:center;
justify-content:center;
align-items: center;
flex-direction: column;
height: 55%;
width: 350px;
transition: 0.5s ease all;
transform: scale(1);
transform-origin: center;
&:hover {
  transition: 0.5s ease all;
  transform: scale(1.1);
  transform-origin: center;
}
`;

export const OptionImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const OptionContainer = styled.a`
  width: 100%;
  height: 100%;
  margin: 0;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 10px 2px grey;
    transition: 0.5s;
  }
`;

export const OptionTitle = styled.p`
  font-size: 24px;
  background: -webkit-linear-gradient(#FFEE27, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;