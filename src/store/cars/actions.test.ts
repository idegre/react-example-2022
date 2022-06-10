import configureStore from 'redux-mock-store';
import { AppDispatch, RootState } from '..';
import { fetchCars } from './actions';
import thunk from 'redux-thunk';

const trafficMeister = {
	fetchData(cb: (error: string | null, data: []) => void) {
		cb(null, []);
	}
};

const trafficMeisterError = {
	fetchData(cb: (error: string | null, data?: []) => void) {
		cb('failed');
	}
};

const mockStore = configureStore<RootState, AppDispatch>([thunk]);

describe('fetch cars action tests:', () => {
	test('should call correct actions', async () => {
		global.trafficMeister = trafficMeister;
		const store = mockStore({
			cars: {list: null, isLoading: false},
			selection: {fields: {}}
		});
		await store.dispatch(fetchCars());

		const actions = store.getActions();
		expect(actions).toStrictEqual([
			{ type: 'cars/setLoadingCars', payload: undefined },
			{ type: 'cars/setCars', payload: [] }
		]);

	});
	test('should call correct actions on error', async () => {
		global.trafficMeister = trafficMeisterError;
		const store = mockStore({
			cars: {list: null, isLoading: false},
			selection: {fields: {}}
		});
		await store.dispatch(fetchCars());

		const actions = store.getActions();
		expect(actions).toStrictEqual([
			{ type: 'cars/setLoadingCars', payload: undefined },
			{ type: 'cars/setCarsError', payload: 'failed' }
		]);

	});
});