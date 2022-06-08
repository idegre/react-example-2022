import { AppDispatch } from '..';
import { setCars, setCarsError, setLoadingCars } from './slices';

export const fetchCars = () => async (dispatch: AppDispatch) => {
	const serviceCallback = (error: string | null, data?: trafficMeister.Car[]) => {
		if(error !== null) {
			dispatch(setCarsError(error));
		} else if (data) {
			dispatch(setCars(data));
		}
	};
	dispatch(setLoadingCars());
	trafficMeister.fetchData(serviceCallback);
};