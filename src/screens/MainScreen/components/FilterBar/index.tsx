import React from 'react';

import { Dropdown } from '/src/components/Dropdown';
import { getFieldOptionsSelector } from '/src/store/cars/selectors';
import { useAppSelector } from '/src/store/hooks';

import { Container } from './styled';

export const FilterBar = () => {
	const types = useAppSelector(getFieldOptionsSelector('type'));
	const brands = useAppSelector(getFieldOptionsSelector('brand'));
	const colors = useAppSelector(getFieldOptionsSelector('colors'));
    
	return <Container>
		<Dropdown title="type" options={types}/>
		<Dropdown title="brand" options={brands}/>
		<Dropdown title="colors" options={colors}/>
	</Container>;
};