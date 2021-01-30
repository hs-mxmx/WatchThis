import styled from 'styled-components/macro';

export const Container = styled.div `
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Titillium Web', sans-serif;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 1500px;
    border:1px solid black;
 }
`;

export const Box = styled.div`
  padding: 30px 0 30px 0;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: black;
  
`;

export const Carousel = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 300px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 150px;
    border:1px solid black;
 }
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
  margin: 300px 0 0 0;
`;

export const FeatureData = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: justify;

  height: 100%;
`;

export const FeatureTitle = styled.p `
  background: -webkit-linear-gradient(#FFEE27, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 72px;
  margin: 0 0 20px 0;
  width: 1000px;
`;

export const Category = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 3px;
`;
export const Content = styled.div `
  font-size: 14px;
  color: #7F7F7F;
  margin-bottom: 15px;
`;

export const FeatureContent = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 70%;
  height: 55%;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,0.8);
  padding: 30px;
  border-radius: 10px;
`;


export const CardImage = styled.img `
  width: 100%;
  height: 200px;
`;

export const FeatureImage = styled.img `
  width: 100%;
  opacity: 0.5;
  
`;

export const FeatureLink = styled.a `
  background-color: #084E37;
  padding: 10px;
  font-size: 24px;
  border: 3px solid black;
  border-radius: 40px;
  text-align: center;
  margin: 100px;
  color: grey;
  width: 400px;
  box-shadow: 0 0 10px 2px black;
  &:hover {
    cursor: pointer;
    background-color: #00EE9D;
    box-shadow: 0 0 10px 2px grey;
    border: 3px solid grey;
    color: white;
  }
  text-decoration: none;
`;