import React from "react";
import classes from "./Todo.module.css";
import TodoItem from "./TodoItem";
const Todo = (props) => {
	// const ref = useHorizontalScroll();
	// useEffect(() => {
	// 	console.log(ref.current);

	// 	return () => {};
	// }, []);

	// const wheel = () => {
	// 	ref.current.scrollTo({
	// 		left: 1000,
	// 		behaviour: "smooth",
	// 	});
	// };

	let todos = <p>Loading todos</p>;

	if (props.todos.length > 0) {
		todos = props.todos.map((e) => {
			return (
				<TodoItem
					id={e._id}
					key={e._id}
					shared={props.shared}
					task={e.task}
					tags={e.tags}
					marked={e.marked}
				/>
			);
		});
	}

	return (
		<div className={classes.TodoCont}>
			{todos}
			{/* <TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem /> */}
		</div>
	);
};

export default Todo;
