import { configureStore } from '@reduxjs/toolkit';
import ingredients from './slices/ingredientsSlice';
import order from './slices/orderDetailsSlice';
import ingredientConstructor from './slices/constructorSlice';
import ingredientDetails from './slices/ingredientDetailsSlice';

export const store = configureStore({
	reducer: { ingredients, order, ingredientDetails, ingredientConstructor },
});
