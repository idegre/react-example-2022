import React from 'react';
import styled from 'styled-components';

type Props = {
    children: string;
}

const Text = styled.div`
    font-family: Roboto;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Typography = ({children}: Props) => <Text>{children}</Text>;