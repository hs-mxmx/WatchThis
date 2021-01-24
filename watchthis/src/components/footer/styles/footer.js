import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;