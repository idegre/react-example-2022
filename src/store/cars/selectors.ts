import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

type Car = trafficMeister.Car

type Fields = keyof Omit<Car, 'id' | 'img'>

const getCars = (state: RootState) => state.cars.list;
const getSelections = (state: RootState) => state.selection.fields;

export const getMatchingCars = createSelector([getCars, getSelections], (cars, fields) => {
	return cars?.filter(car =>
		Object.keys(fields) //get field names
			.filter((f) => !!fields[f]) // remove no selection ones
			.every(field => {
				if(typeof car[<Fields>field] === 'string') return car[<Fields>field] === fields[field];
				else return car[<Fields>field]?.includes(<string>fields[field]);//check that selection exists in options for that car
			}));
});

export const getFieldOptionsSelector = (selectorField: Fields) => createSelector(getMatchingCars, (matchingCars) => {
	return matchingCars
		? matchingCars.reduce<string[]>((p,c) => {
			const mappedArr = Object.fromEntries(p.map(i => [i, ''])); // option accumulator
			if(typeof c[selectorField] !== 'string')
				[...c[selectorField]].forEach(i => mappedArr[i] = ''); 
			else mappedArr[<string>c[selectorField]] = '';
			return Object.keys(mappedArr);
		}, []) : [];
});