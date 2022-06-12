import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SelectionState = {
    fields: {
        [field: string]: string | null
    }
}

const initialState: SelectionState = {
	fields: {}
};

export const CONSTANTS = {
	NO_SELECTION: 'No Selection'
};

export const carsSlice = createSlice({
	name: 'selection',
	initialState,
	reducers: {
		setSelection: (state, {payload: {field, value}}: PayloadAction<{field: string, value: string}>) => {
			state.fields[field] = value === CONSTANTS.NO_SELECTION ? null : value;
		}
	},
});

export const { setSelection } = carsSlice.actions;

export default carsSlice.reducer;