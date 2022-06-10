import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchCars } from '../../store/cars/actions';
import { useAppDispatch } from '../../store/hooks';
import { CarList } from './components/CarList';
import { FilterBar } from './components/FilterBar';

const Container = styled.div`
    display: flex;
	flex-direction: column;
    justify-items: center;
    width: 100vw;
    height: 100vh;
	background-color: #252e40;
`;

export const MainScreen = () => {
	const dispatch = useAppDispatch();
	

	useEffect(() => {
		dispatch(fetchCars());
	}, []);
	return <Container>
		<FilterBar />
		<CarList />
	</Container>;};