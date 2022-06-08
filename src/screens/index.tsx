import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchCars } from '../store/cars/actions';
import { useAppDispatch } from '../store/hooks';

const Container = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

`;

export const MainScreen = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCars());
	}, []);
	return <Container>
    
	</Container>;};