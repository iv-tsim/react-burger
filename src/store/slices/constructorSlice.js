import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: {
		bun: null,
		ingredients: [],
	},
};

const getTotalPrice = (state) => {
	const bunsPrice = state.items.bun ? state.items.bun.data.price * 2 : 0;
	const ingredientsPrice = state.items.ingredients.reduce((sum, ingredient) => (sum += ingredient.data.price), 0);
	return ingredientsPrice + bunsPrice;
};

const swapItems = (array, originalIndex, newIndex) => {
	const result = [...array];
	[result[originalIndex], result[newIndex]] = [result[newIndex], result[originalIndex]];
	return result;
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
			const newIndex = action.payload.newIndex;
			if (newIndex < 0 || newIndex > state.items.ingredients.length) return;
			const currentIndex = action.payload.currentIndex;

			state.items.ingredients = swapItems(state.items.ingredients, currentIndex, newIndex);
		},
		clearConstructor(state) {
			state.items = {
				bun: null,
				ingredients: [],
			};
			state.totalPrice = 0;
		},
	},
});

export const { addIngredient, setBun, removeIngredient, moveIngredient, clearConstructor } = constructorSlice.actions;

export default constructorSlice.reducer;
