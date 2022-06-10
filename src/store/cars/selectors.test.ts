import { getFieldOptionsSelector, getMatchingCars } from './selectors';

const mockStore = (filters?: {[prop: string]: string}) => ({
	cars: {
		isLoading: false,
		list:[{
			id: 1,
			type: 'type1',
			brand: 'brand1',
			colors: ['1', '2'],
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
		},
		{
			id: 2,
			type: 'type1',
			brand: 'brand2',
			colors: ['3', '4', '5', '6'],
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
		},
		{
			id: 3,
			type: 'type2',
			brand: 'brand',
			colors: ['1', '2', '5'],
			img: 'fake URL'
		}]
	},
	selection: {
		fields: filters || {}
	}
});

describe('test selectors', () => {
	test('it should bring type options without repetitions', () => {
		const result = getFieldOptionsSelector('type')(mockStore());
		expect(result).toStrictEqual(['type1', 'type2']);
	});
	test('it should bring colors options without repetitions', () => {
		const result = getFieldOptionsSelector('colors')(mockStore());
		expect(result).toStrictEqual(['1','2','3','4','5','6']);
	});
	test('it should bring fewer options when filtered', () => {
		const result = getFieldOptionsSelector('brand')(mockStore({colors: '1'}));
		expect(result).toStrictEqual(['brand1', 'brand']);
	});
	test('it should filter cars', () => {
		const result = getMatchingCars(mockStore({colors: '1'}));
		expect(result).toStrictEqual([{
			id: 1,
			type: 'type1',
			brand: 'brand1',
			colors: ['1', '2'],
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
		},{
			id: 3,
			type: 'type2',
			brand: 'brand',
			colors: ['1', '2', '5'],
			img: 'fake URL'
		}]);
	});
	test('it should return empty array', () => {
		const result = getMatchingCars(mockStore({colors: '99'}));
		expect(result).toStrictEqual([]);
	});
});