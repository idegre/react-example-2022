import React from 'react';
import { CarCard } from '.';
import renderer from 'react-test-renderer';

describe('test selectors', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<CarCard car={{
				id: 1,
				type: 'type1',
				brand: 'brand1',
				colors: ['1', '2'],
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
			}}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('handles broken image links', () => {
		const tree = renderer
			.create(<CarCard car={{
				id: 3,
				type: 'type2',
				brand: 'brand',
				colors: ['1', '2', '5'],
				img: 'fake URL'
			}}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});