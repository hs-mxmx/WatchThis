import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  border-box:none;
  justify-content:center;
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  align-items: center;
  background-color: #0c0c0c;
  width: 100%;
  position: fixed;
  z-index: 1000;
`;

export const NavHeader = styled.nav`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  color=white;
  width: 100%;
`;

export const NavUl = styled.ul`
  font-family: 'Titillium Web', sans-serif;
  width: 100%;
  display: flex;
  color: white;
`;

export const NavLi = styled.li`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  width: 100%;
  color:white;
`;

export const TitleHeader = styled.a`
  width: 80%;
  display: flex;
  background: -webkit-linear-gradient(#FFEE27, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  margin: 0px 20px 0px 20px;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`;

export const Link = styled.a`
    font-size: 20px;
    color: white;
    text-decoration: none;
    &:hover {
        color: #00EE9D;
        cursor: pointer;
        transition: 0.8s;
      }
`;
export const Input = styled.input`
  
  margin-right:120px;
  margin-top:5px;
  background-color: #0c0c0c;
  margin-top:12px;
  color: white;
  height: 35px;
  line-height: 2px;
  border:none;
  border-bottom: 1px solid grey;
  outline:none;
`;

export const ListGroup = styled.div`
  z-index: 1000;
  font-family: 'Titillium Web', sans-serif;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  position: fixed;
  top: 5.3%;
  left: 52%;
  transform: translate(-50%);
  height: 250px;
  width: 250px;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  opacity: 0.8;
  background-color: #252525;
  color: white;
  overflow-y: scroll;
  &:hover{
    opacity: 1;
  }
`;

export const ListResult = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  min-height: 40%;
  width: 100%;
  border-bottom: 1px solid #181818;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #181818;
    cursor: pointer;
    color: #00EE9D;
    transition: 0.3s;
  }
`;

export const ListResultImage = styled.img`
  height: 70%;
  width: 45%;
`;

export const ListResultTitle = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 10px;
  font-weight: 400px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 45%;
`;