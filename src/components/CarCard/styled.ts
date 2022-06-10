import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: #2e3b52;
    border-radius: 10px;
    width: 150px;
    overflow: hidden;

    img {
        max-heigth: 150px;
        width: 150px;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;
