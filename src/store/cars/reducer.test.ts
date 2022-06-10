import reducer, { setLoadingCars, setCars, setCarsError } from './slices';

describe('cars reducer tests:', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {type: ''})).toEqual(
			{
				isLoading: false,
				list: null,
			}
		);
	});

	test('should start loading', () => {
		const previousState = {
			isLoading: false,
			list: null,
		};
		expect(reducer(previousState, setLoadingCars())).toEqual({
			isLoading: true,
			list: null,
		});
	});

	test('should recieve data and finish loading', () => {
		const previousState = {
			isLoading: true,
			list: null,
		};
		expect(reducer(previousState, setCars([]))).toEqual({
			isLoading: false,
			list: [],
		});
	});

	test('should handle error and finish loading', () => {
		const previousState = {
			isLoading: true,
			list: [],
		};
		expect(reducer(previousState, setCarsError('error'))).toEqual({
			isLoading: false,
			list: null,
			error: 'error'
		});
	});
});