import React, { useState } from "react";
import SideButton from "../../UI/SideButton/SideButton";
import cross from "../../../assets/icons/cross.png";
import options from "../../../assets/icons/options.png";
import classes from "./NavButton.module.css";
import MiniButton from "../../UI/SideButton/MiniButton";

import logout from "../../../assets/icons/logout.png";
import addTodo from "../../../assets/icons/addTodo.png";
import stats from "../../../assets/icons/stats.png";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../../store/AuthSlice";
import { logoutAction } from "../../../store/Actions/authActions";
import AddTodo from "../../Todo/AddTodo";
// import { add } from "lodash";

const NavButton = () => {
	const [isOpen, setisOpen] = useState(false);
	const [isformOpen, setisformOpen] = useState(false);
	const dispatch = useDispatch();
	const clickHandler = () => {
		console.log("kk");
		setisOpen((prev) => !prev);
	};

	const logoutHandler = () => {
		dispatch(logoutAction());
	};
	const openForm = () => {
		setisformOpen(true);
	};

	const closeForm = () => {
		setisformOpen(false);
	};

	return (
		<div className={classes.navButtons}>
			{isformOpen && <AddTodo closeForm={closeForm} />}
			<SideButton
				color={isOpen ? "#ffffff" : "#357bf0"}
				icon={isOpen ? cross : options}
				whenClicked={clickHandler}
			/>
			{isOpen && (
				<>
					<MiniButton
						color='#ff5050'
						icon={logout}
						label='logout'
						whenClicked={logoutHandler}
					/>
					<MiniButton
						icon={addTodo}
						color='#1BF808'
						label='add New todo'
						whenClicked={openForm}
					/>
					<MiniButton icon={stats} color='#F3EA09' label='stats' />
				</>
			)}
		</div>
	);
};

export default NavButton;
