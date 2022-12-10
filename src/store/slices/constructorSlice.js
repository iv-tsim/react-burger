import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: {
		bun: null,
		ingredients: [],
	},
};

const getTotalPrice = (state) => {
	const bunsPrice = state.items.bun.data.price * 2;
	const ingredientsPrice = state.items.ingredients.reduce((sum, ingredient) => (sum += ingredient.data.price), 0);
	return ingredientsPrice + bunsPrice;
};

export const constructorSlice = createSlice({
	name: 'ingredientConstructor',
	initialState,
	reducers: {
		addIngredient(state, action) {
			state.items.ingredients.push({ ...action.payload });
			state.totalPrice = getTotalPrice(state);
		},
		setBun(state, action) {
			state.items.bun = { ...action.payload };
			state.totalPrice = getTotalPrice(state);
		},
		removeIngredient(state, action) {
			state.items.ingredients = state.items.ingredients.filter((ingredient) => ingredient._id !== action.payload._id);
			state.totalPrice = getTotalPrice(state);
		},
		moveIngredient(state, action) {
			state.items.ingredients = state.items.ingredients.filter((ingredient) => ingredient._id !== action.payload.data._id);
			state.items.ingredients = state.items.ingredients.splice(action.payload.newIndex, 0, action.payload.data);
		},
	},
});

export const { addIngredient, setBun, removeIngredient, moveIngredient } = constructorSlice.actions;

export default constructorSlice.reducer;
