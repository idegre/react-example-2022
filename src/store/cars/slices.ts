import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
type CarsState = {
  isLoading: boolean;
  cars: trafficMeister.Car[] | null;
  error?: string;
}

// Define the initial state using that type
const initialState: CarsState = {
	isLoading: false,
	cars: null,
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
			state.cars = action.payload;
		},
		setCarsError: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	},
});

export const { setLoadingCars, setCars, setCarsError } = carsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default carsSlice.reducer;