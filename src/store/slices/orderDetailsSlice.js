import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrderDetails } from '../../utils/burger-api';

export const fetchOrderDetails = createAsyncThunk('orderDetails/fetchOrderDetailsStatus', async (ingredientsIds) => {
	const data = await getOrderDetails({
		ingredients: ingredientsIds,
	});
	return data;
});

const initialState = {
	data: {},
	status: 'loading',
};

export const OrderDetailsSlice = createSlice({
	name: 'orderDetails',
	initialState,
	extraReducers: {
		[fetchOrderDetails.pending]: (state) => {
			state.status = 'loading';
			state.data = null;
		},
		[fetchOrderDetails.fulfilled]: (state, action) => {
			state.status = 'success';
			state.data = action.payload;
		},
		[fetchOrderDetails.rejected]: (state) => {
			state.status = 'error';
			state.data = null;
		},
	},
});

export default OrderDetailsSlice.reducer;
