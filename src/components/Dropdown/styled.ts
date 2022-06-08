import styled from 'styled-components';

export const DropdownContainer = styled.div`
    display: flex;
    height: 30px;
    min-width: 60px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    align-items: center;
    justify-items: center;
    user-select: none;
    margin: 5px;
    padding: 5px;
    position: relative;
`;

export const DropdownMenu = styled.div`
    position: absolute;
    padding-top: 40px;
    left: -1px;
    display: flex;
    flex-direction: row;
    min-width: 60px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    justify-items: center;
    user-select: none;
    background: white;
    z-index: -1;
`;