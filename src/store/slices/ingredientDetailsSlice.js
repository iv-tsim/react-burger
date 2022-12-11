import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

export const ingredientDetailsSlice = createSlice({
	name: 'ingredientDetails',
	initialState,
	reducers: {
		setCurrentIngredient(state, action) {
			state.data = action.payload;
		},
		clearCurrentIngredient(state) {
			state.data = null;
		},
	},
});

export const { setCurrentIngredient, clearCurrentIngredient } = ingredientDetailsSlice.actions;

export default ingredientDetailsSlice.reducer;
