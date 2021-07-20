import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { shareTodoAction } from "../../../store/Actions/todoactions";
import classes from "./Popup.module.css";
const Popup = (props) => {
	const [search, setsearch] = useState("");
	const [friendList, setfriendList] = useState([]);

	const dispatch = useDispatch();
	useEffect(() => {
		const timer = setTimeout(() => {
			axios
				.get("http://localhost:3050/auth/getNames/" + search)
				.then((e) => {
					setfriendList(e.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [search]);

	const onChangeHandler = (event) => {
		setsearch(event.target.value);
	};
	const shareTodo = (userId) => {
		dispatch(shareTodoAction(props.id, userId));
	};
	let list = <p className={classes.plchldr}>Search friends</p>;

	if (friendList.length > 0) {
		list = friendList.map((e) => {
			return (
				<div
					key={e._id}
					onClick={() => {
						shareTodo(e._id);
					}}
					className={classes.listel}
				>
					<p>{e.name}</p>
				</div>
			);
		});
	}

	return (
		<div className={classes.popup}>
			<input
				type='text'
				placeholder='type something'
				onChange={onChangeHandler}
			/>
			<div className={classes.listHold}>{list}</div>
		</div>
	);
};

export default Popup;
