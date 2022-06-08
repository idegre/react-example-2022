import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SelectionState = {
    fields: {
        [field: string]: string
    }
}

const initialState: SelectionState = {
	fields: {}
};

export const carsSlice = createSlice({
	name: 'selection',
	initialState,
	reducers: {
		setSelection: (state, {payload: {field, value}}: PayloadAction<{field: string, value: string}>) => {
			state.fields[field] = value;
		}
	},
});

export const { setSelection } = carsSlice.actions;

export default carsSlice.reducer;