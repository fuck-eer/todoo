import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	sharedTodos: [],
};

const todoSlice = createSlice({
	name: "TodoSlice",
	initialState,
	reducers: {
		getTodos(state, action) {
			state.todos = action.payload;
		},
		getSharedTodos(state, action) {
			state.sharedTodos = action.payload;
		},
		addTodo(state, action) {
			state.todos = [...state.todos, action.payload.todo];
		},
		shareTodo() {},
		markTodo(state, action) {
			const Indx = state.todos.findIndex(
				(e) => e._id === action.payload.todo._id
			);
			if (Indx === -1) {
				return;
			}
			state.todos[Indx] = action.payload.todo;
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter((e) => e._id !== action.payload.id);
		},
	},
});

export default todoSlice.reducer;
export const todoActions = todoSlice.actions;
