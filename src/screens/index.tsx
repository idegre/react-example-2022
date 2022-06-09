import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Dropdown } from '../components/Dropdown';
import { fetchCars } from '../store/cars/actions';
import { getFieldOptionsSelector } from '../store/cars/selectors';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Container = styled.div`
    display: flex;
    justify-items: center;
    width: 100vw;
    height: 100vh;

`;

export const MainScreen = () => {
	const dispatch = useAppDispatch();
	const types = useAppSelector(getFieldOptionsSelector('type'));
	const brands = useAppSelector(getFieldOptionsSelector('brand'));
	const colors = useAppSelector(getFieldOptionsSelector('colors'));
	useEffect(() => {
		dispatch(fetchCars());
	}, []);
	return <Container>
		<Dropdown title="type" options={types}/>
		<Dropdown title="brand" options={brands}/>
		<Dropdown title="colors" options={colors}/>
	</Container>;};