import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #111111;
  border-radius: 5px;
  width: 100%;
  margin: auto;
  height: 55%;
  max-width: 450px;
  padding: 60px 68px 40px;
  opacity: 0.9;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
  overflow-y: auto;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #00EE9D;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MailWrapper = styled.div`
  margin-top: 25px;
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #111111;
  border-radius: 15px;
  width: 60%;
  height: auto;
  max-width: 450px;
  padding: 15px 20px 0 20px;
`;

export const Select = styled.select`
  background-color: #DEDEDE;
`;

export const SelectOption = styled.option`
`;