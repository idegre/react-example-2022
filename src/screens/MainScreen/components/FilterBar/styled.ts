import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: #2e3b52;

    @media (max-width: 320px) {
        flex-direction: column;
    }
`;