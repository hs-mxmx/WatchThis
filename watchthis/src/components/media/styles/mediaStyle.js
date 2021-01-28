import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Carousel = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: no-wrap;
`;

export const Title = styled.h1`
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: end;
`;

export const Tab = styled.div`
  padding: 5px;
  background-color: white;
`;

export const Link = styled.div `
  width: 20%;
  transition: 0.2s;
  &:hover {
    background-color: rgba(0,0,0,0.3);
    transition: 0.5s ease all;
    transform: scale(1.2);
    transform-origin: center;
  }
`;

export const ArrowLeft = styled.div `
  position: absolute;
  left: 0;
  cursor: pointer;
  z-index: 100;
  font-size: 40px;
  color: white;
  transition: 0.3s ease all;
  border-radius: 0px 15px 15px 0px;
  padding: 5px;
  border: none;
  &:hover {
    transition: 0.3s ease all;
    background: rgba(0,0,0,0.3);
  }
`;

export const ArrowRight = styled.div `
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 100;
  font-size: 40px;
  color: white;
  transition: 0.3s ease all;
  border-radius: 15px 0 0 15px;
  padding: 5px;
  border: none;
  &:hover {
    transition: 0.3s ease all;
    background: rgba(0,0,0,0.3);
  }
`;

export const CarouselContainer = styled.div `
position: relative;
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border: 1px solid red;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const Control = styled.button `
  background-color: white;
  height: 3px;
  width: 10px;
  border: none;
`;