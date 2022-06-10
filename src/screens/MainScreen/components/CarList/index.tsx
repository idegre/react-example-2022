import React from 'react';
import { Container } from './styled';
import { CarCard } from '/src/components/CarCard';
import { getMatchingCars } from '/src/store/cars/selectors';
import { useAppSelector } from '/src/store/hooks';

export const CarList = () => {
	const cars = useAppSelector(getMatchingCars);
	return <Container>
		{cars?.map((c) => <CarCard car={c} key={c.id}/>)}
	</Container>;
};