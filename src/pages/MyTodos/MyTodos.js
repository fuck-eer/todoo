import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Route } from "react-router-dom";
import NavButton from "../../components/Layout/navButton/NavButton";
import Todo from "../../components/Todo/Todo";
import SideNav from "../../components/UI/SideNav/SideNav";
import {
	getSharedTodoActions,
	getTodoActions,
} from "../../store/Actions/todoactions";
import classes from "./MyTodos.module.css";

const MyTodos = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTodoActions());
		// dispatch(getSharedTodoActions());
		return () => {};
	}, [dispatch]);
	useEffect(() => {
		dispatch(getSharedTodoActions());
	}, [dispatch]);

	const todos = useSelector((state) => state.todoSlice.todos);
	const sharedTodos = useSelector((state) => state.todoSlice.sharedTodos);
	return (
		<>
			<div className={classes.QuoteSec}>
				<SideNav />
				<NavButton />
			</div>
			<div className={classes.ActivitySec}>
				<Route path='/myTodos/' exact>
					<Redirect to='/myTodos/yourTodos' />
				</Route>
				<Route path='/myTodos/yourTodos'>
					<Todo todos={todos} shared={false} />
				</Route>
				<Route path='/myTodos/sharedTodos'>
					<Todo todos={sharedTodos} shared />
				</Route>
			</div>
			<div className={classes.todoNav}>
				<nav>
					<ul className={classes.listHolder}>
						<NavLink
							className={classes.link}
							to='/myTodos/yourTodos'
							activeClassName={classes.active}
							exact
						>
							Your Todos
						</NavLink>
						<NavLink
							className={classes.link}
							to='/myTodos/sharedTodos'
							activeClassName={classes.active}
							exact
						>
							Shared Todos
						</NavLink>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MyTodos;
