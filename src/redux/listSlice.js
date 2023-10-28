import { createSlice } from "@reduxjs/toolkit";

const list = JSON.parse(localStorage.getItem("todoList")) || [];

const initialState = list;

export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const item = action.payload;
			state.push(item);
		},
		removeItem: (state, action) => {
			const index = action.payload;
			state.splice(index, 1);
		},
		checkToggleItem: (state, action) => {
			const index  = action.payload;
			state[index].checked = !state[index].checked;
		}
	}
});

export const { addItem, removeItem, checkToggleItem } = listSlice.actions;
export default listSlice.reducer;