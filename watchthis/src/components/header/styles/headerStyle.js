import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  border-box:none;
  justify-content:center;
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  background-color: #1c1c1c;
  width: 100%;
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

export const TitleHeader = styled.h3`
  width: 80%;
  background: -webkit-linear-gradient(#FFEE27, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  margin-left:20px;
  margin-top: 2px;
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
  background-color: #1c1c1c;
  margin-top:12px;
  color: white;
  height: 35px;
  line-height: 2px;
  border:none;
  border-bottom: 1px solid grey;
  outline:none;
`;
