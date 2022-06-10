import styled from 'styled-components';

export const DropdownContainer = styled.div`
    margin: 5px;
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    select {
        display: flex;
        align-items: center;
        justify-items: center;
        user-select: none;
        position: relative;
        appearance: none;
        background-color: transparent;
        border-style: solid;
        border-width: 1px;
        border-radius: 10px;
        border-color: #364560;
        padding 5px;
        height: 30px;
        min-width: 60px;
        font-family: Roboto;
        color: white;
        outline: none;
        user-select: none;
    }

    select::-ms-expand {
        display: none;
    }

    &:focus {
        border-color: #ffa821;
    }

    select:focus {
        border-color: #ffa821;
    }
`;