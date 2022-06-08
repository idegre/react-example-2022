import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CarsState = {
  isLoading: boolean;
  list: trafficMeister.Car[] | null;
  error?: string;
}

const initialState: CarsState = {
	isLoading: false,
	list: null,
};

export const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setLoadingCars: (state) => {
			state.isLoading = true;
		},
		setCars: (state, action: PayloadAction<trafficMeister.Car[]>) => {
			state.isLoading = false;
			state.list = action.payload;
		},
		setCarsError: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
			state.list = null;
		}
	},
});

export const { setLoadingCars, setCars, setCarsError } = carsSlice.actions;

export default carsSlice.reducer;