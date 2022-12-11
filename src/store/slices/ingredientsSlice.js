import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRequest, INGREDIENTS_URL } from '../../utils/burger-api';

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredientsStatus', async () => {
	const { data } = await fetchRequest(INGREDIENTS_URL);
	return data;
});

const initialState = {
	items: [],
	status: 'loading',
};

export const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState,
	extraReducers: {
		[fetchIngredients.pending]: (state) => {
			state.status = 'loading';
			state.items = [];
		},
		[fetchIngredients.fulfilled]: (state, action) => {
			state.status = 'success';
			state.items = action.payload;
		},
		[fetchIngredients.rejected]: (state) => {
			state.status = 'error';
			state.items = [];
		},
	},
});

export default ingredientsSlice.reducer;
