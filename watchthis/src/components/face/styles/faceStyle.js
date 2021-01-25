import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 50%;
  flex-direction: column;

`;

export const Title = styled.h1`
  background: -webkit-linear-gradient(#FFEE27, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 110px;
  margin-bottom: 0;
`;

export const Subtitle = styled.h3`
  color: white;
  font-style: italic;
`;