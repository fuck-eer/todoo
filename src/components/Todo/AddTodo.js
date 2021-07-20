import React, { useState } from "react";
import reactDom from "react-dom";
import { useDispatch } from "react-redux";
import goArrow from "../../assets/icons/formArrow.png";
import { addTodoAction } from "../../store/Actions/todoactions";
import classes from "./AddTodo.module.css";
const BackDrop = (props) => {
	return <div onClick={props.closeForm} className={classes.BackDrop}></div>;
};

const TodoForm = (props) => {
	const [task, settask] = useState("");
	const [tags, settags] = useState("");
	const dispatch = useDispatch();
	const onSub = (event) => {
		event.preventDefault();
		dispatch(
			addTodoAction({
				task: task,
				tags: tags,
				isShared: false,
			})
		);
		settask("");
		settags("");
		props.closeForm();
	};

	const taskChangeHandler = (event) => {
		settask(event.target.value);
	};
	const tagsChangeHandler = (event) => {
		settags(event.target.value);
	};

	return (
		<div className={classes.addTodo}>
			<div className={classes.formHead}>
				<p className={classes.subHd}>Get it done</p>
				<p className={classes.mainHd}>ADD A TODO</p>
			</div>
			<form onSubmit={onSub} className={classes.form}>
				<div className={classes.inp}>
					<label htmlFor='task'>Task</label>
					<input
						onChange={taskChangeHandler}
						type='text'
						id='task'
						value={task}
					/>
				</div>
				<div className={classes.inp}>
					<label htmlFor='tags'>Tags</label>
					<input
						onChange={tagsChangeHandler}
						type='text'
						id='tags'
						value={tags}
					/>
				</div>
				<div className={`${classes.inp} ${classes.inps}`}>
					<label htmlFor='shared'>Sharing?:</label>
					<select defaultValue={false} name='shared' id='shared'>
						<option value='true'>Yes</option>
						<option value='false'>No</option>
					</select>
				</div>
				<div className={`${classes.inp} ${classes.inpo}`}>
					{/* <Link to='/home/auth/login'>Already have an account?</Link> */}
					<button className={classes.buttonform}>
						<img src={goArrow} alt='Go' />
					</button>
				</div>
			</form>
		</div>
	);
};

const AddTodo = (props) => {
	return (
		<>
			{reactDom.createPortal(
				<BackDrop closeForm={props.closeForm} />,
				document.getElementById("backdrop")
			)}
			{reactDom.createPortal(
				<TodoForm closeForm={props.closeForm} />,
				document.getElementById("form")
			)}
		</>
	);
};

export default AddTodo;
