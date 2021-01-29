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
  height: 250px;
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
  }
`;

export const Title = styled.p `
  color: white;
  font-size: 32px;
  margin: 0;
`;

export const Feature = styled.div`
  width: 100%;
  transition: 0.2s ease all
  margin: 0;
  overflow: hidden;
`;
export const Item = styled.div ``;

export const Description = styled.div ``;

export const CardImage = styled.img `
  width: 100%;
  height: 165px;
`;

export const FeatureImage = styled.img `
  width: 100%;
  opacity: 0.3;
`;