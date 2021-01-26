import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 30px;
    background-color: #111111;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1000px) {
        padding: 15px;
    }
`;

export const Trivia = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
`;

export const ActualDate = styled.div`
    display: flex;
    width: 100%;
    color: #999999;
    font-size: 14px;
    direction:rtl;
    text-align:justify;
`;

export const NavLink = styled.a`
    font-size: 20px;
    color white;
    text-decoration: none;
    &:hover {
        color: #00EE9D;
        cursor: pointer;
        transition: 0.8s;
      }
`
export const SocialMedia = styled.div`
    display: flex;
    background-color: #999999;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 0 10px 0 10px;
    border-radius: 25px;
    margin: 100px;
`

export const SocialIcon = styled.img`
      height: 32px;
      width: 32px;
`