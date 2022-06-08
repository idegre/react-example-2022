import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

type Car = trafficMeister.Car

type Fields = keyof Omit<Car, 'id' | 'img'>

const getCars = (state: RootState) => state.cars.list;
const getSelections = (state: RootState) => state.selection.fields;

export const getFieldOptionsSelector = (field: Fields) => createSelector([getCars, getSelections], (cars, fields) => {
	return cars?.filter(car => Object.keys(fields)
		.filter(f => (f !== field) && (!!fields[f]))
		.every(field => car[<Fields>field] === fields[field]))
		.reduce<string[]>((p,c) => {
			const mappedArr = Object.fromEntries(p.map(i => [i, '']));
			if(typeof c[field] !== 'string')
				[...c[field]].forEach(i => mappedArr[i] = ''); 
			else mappedArr[<string>c[field]] = '';
			return Object.keys(mappedArr);
		}, []);
});