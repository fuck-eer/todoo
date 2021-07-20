import React, { useCallback } from "react";
import MiniButton from "../UI/SideButton/MiniButton";
import classes from "./TodoItem.module.css";
import done from "../../assets/icons/done.png";
import del from "../../assets/icons/delete.png";
import share from "../../assets/icons/share.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	deleteTodoAction,
	markTodoAction,
} from "../../store/Actions/todoactions";
import Popup from "../UI/PopUpList/Popup";
const TodoItem = (props) => {
	const dispatch = useDispatch();
	const [showButtons, setshowButtons] = useState(false);
	const [showShare, setshowShare] = useState(false);
	const onMouseEnter = useCallback(() => {
		setshowButtons(true);
	}, []);
	const nMouseLeave = useCallback(() => {
		setshowButtons(false);
	}, []);

	let status;
	if (props.marked) {
		status = props.marked.map((e) => {
			return (
				<div
					key={Math.floor(Math.random() * 100)}
					className={classes.statusMarker}
				>
					<div
						style={{
							backgroundColor: `${e.status === "pending" ? "yellow" : "green"}`,
						}}
						className={classes.marker}
					></div>
					<p>{e.memberId}</p>
				</div>
			);
		});
	}

	const handleShare = () => {
		setshowShare((prev) => !prev);
	};

	return (
		<div
			onMouseLeave={nMouseLeave}
			onMouseEnter={onMouseEnter}
			className={classes.Item}
		>
			<div className={classes.todoDetails}>
				<h2>{props.task}</h2>
				<p className={classes.tags}>{props.tags}</p>
				<p className={classes.details}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</p>
			</div>
			<div className={classes.todoStatus}>
				<h6>Status:</h6>
				{status}
				{/* <div className={classes.statusMarker}>
					<div className={classes.marker}></div>
					<p>nishchay(pending)</p>
				</div> */}
			</div>
			<div className={classes.todoButtons}>
				{showShare && showButtons && <Popup id={props.id} />}
				{showButtons && (
					<>
						<MiniButton
							width='30px'
							height='30px'
							icon={done}
							color='#1BF808'
							label='Mark Complete'
							whenClicked={() => {
								dispatch(
									markTodoAction(props.id, {
										status: "completed",
									})
								);
							}}
						/>
						<MiniButton
							width='30px'
							height='30px'
							color='#ff5050'
							icon={del}
							label='delete Todo'
							whenClicked={() => {
								dispatch(deleteTodoAction(props.id));
							}}
						/>

						<MiniButton
							width='30px'
							height='30px'
							icon={share}
							color='#F3EA09'
							label='Share Todo'
							whenClicked={handleShare}
						/>
					</>
				)}
				{!showButtons && <div className={classes.holButton}></div>}
			</div>
		</div>
	);
};

export default TodoItem;
