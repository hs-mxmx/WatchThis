import styled from 'styled-components/macro';

export const Container = styled.div `
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const Box = styled.div`
  padding: 30px 0 30px 0;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  font-family: 'Titillium Web', sans-serif;
`;

export const Carousel = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  flex: nowrap;
  height: 300px;
  
`;

export const Card = styled.div `
  min-width: 20%;
  transition: 0.2s ease all
  height: 165px;
  &:hover {
    transition: 0.2s ease all;
    transform: scale(1.2);
    transform-origin: center;
    cursor: pointer;
    box-shadow: 0 0 10px 2px grey;
  }
  
`;

export const Title = styled.p `
  color: white;
  font-size: 32px;
  margin: 0;
`;

export const Feature = styled.div`
  position: relative;
  width: 100%;
  height:  75%;
  display: flex;
  margin: 0;
`;

export const FeatureData = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-text: justify;
  overflow-wrap: anywhere;
  height: 100%;
`;

export const FeatureTitle = styled.p `
  background: -webkit-linear-gradient(#FFEE27, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 72px;
  margin: 0 0 20px 0;
`;

export const Description = styled.div `
  font-size: 22px;
  color: #DADADA;
  margin-left: 10px;
`;

export const FeatureContent = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 70%;
  height: 40%;
  justify-content: space-around;
  align-items: center;
`;


export const CardImage = styled.img `
  width: 100%;
  height: 200px;
`;

export const FeatureImage = styled.img `
  width: 100%;
  opacity: 0.2;
`;

export const FeatureLink = styled.button `
  background-color: #084E37;
  padding: 25px;
  font-size: 36px;
  border: 3px solid black;
  border-radius: 40px;
  color: grey;
  width: 600px;
  box-shadow: 0 0 10px 2px black;
  &:hover {
    cursor: pointer;
    background-color: #00EE9D;
    box-shadow: 0 0 10px 2px grey;
    border: 3px solid grey;
    color: white;
  }
`;