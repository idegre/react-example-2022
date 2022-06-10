import reducer, { setSelection } from './slices';

describe('filter reducer tests:', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {type: ''})).toEqual(
			{
				fields: {}
			}
		);
	});

	test('should set field', () => {
		const previousState = {
			fields: {}
		};
		expect(reducer(previousState, setSelection({field: '1', value: 'val'}))).toEqual({
			fields: {1: 'val'}
		});
	});

	test('should set new field', () => {
		const previousState = {
			fields: {1: 'val'}
		};
		expect(reducer(previousState, setSelection({field: '2', value: 'value'}))).toEqual({
			fields: {1: 'val', 2: 'value'}
		});
	});

	test('should overwrite', () => {
		const previousState = {
			fields: {1: 'val', 2: 'value'}
		};
		expect(reducer(previousState, setSelection({field: '2', value: '1'}))).toEqual({
			fields: {1: 'val', 2: '1'}
		});
	});
});