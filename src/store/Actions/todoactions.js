import axios from "axios";
import { todoActions } from "../TodoSlice";
// {
//     "task":"second task",
//
//     "tags":"new user task",
//     "isShared":false

// }

const loadedUser = () => {
	const loaduser = JSON.parse(localStorage.getItem("userData"));

	return loaduser ? loaduser.token : null;
};

export const addTodoAction = (todoData) => {
	return (dispatch) => {
		const token = loadedUser();
		axios
			.post("http://localhost:3050/todos", todoData, {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then((todos) => {
				console.log(todos.data);
				dispatch(todoActions.addTodo({ todo: todos.data }));
				console.log(todos.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getTodoActions = () => {
	return (dispatch) => {
		const token = loadedUser();
		axios
			.get("http://localhost:3050/todos", {
				headers: { Authorization: "Bearer " + token },
			})
			.then((todos) => {
				dispatch(todoActions.getTodos(todos.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
export const getSharedTodoActions = () => {
	return (dispatch) => {
		const token = loadedUser();
		axios
			.get("http://localhost:3050/todos/shared", {
				headers: { Authorization: "Bearer " + token },
			})
			.then((todos) => {
				dispatch(todoActions.getSharedTodos(todos.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
export const markTodoAction = (id, obj) => {
	return (dispatch) => {
		const token = loadedUser();
		axios
			.post("http://localhost:3050/todos/mark/" + id, obj, {
				headers: { Authorization: "Bearer " + token },
			})
			.then((e) => {
				dispatch(todoActions.markTodo({ todo: e.data }));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
export const deleteTodoAction = (id) => {
	return (dispatch) => {
		const token = loadedUser();
		axios
			.delete("http://localhost:3050/todos/delete/" + id, {
				headers: { Authorization: "Bearer " + token },
			})
			.then((e) => {
				// console.log(e.data.id);
				dispatch(todoActions.deleteTodo({ id: e.data.id }));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const shareTodoAction = (todoId, shareId) => {
	return (dispatch) => {
		const token = loadedUser();
		axios
			.post(
				"http://localhost:3050/todos/share/" + todoId,
				{ shareWithId: shareId },
				{
					headers: { Authorization: "Bearer " + token },
				}
			)
			.then((e) => {
				dispatch(getTodoActions());
				dispatch(getSharedTodoActions());
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
