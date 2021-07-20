import React from "react";
import classes from "./SideButton.module.css";

// const miniButtons = [
// 	{ color: "#ff5050", name: "logout" ,clickEvent: },
// 	{ color: "#1BF808", name: "Add Todo" },
// 	{ color: "#F3EA09", name: "info" },
// ];

const SideButton = (props) => {
	return (
		<button
			onClick={() => {
				props.whenClicked();
			}}
			style={{ backgroundColor: props.color }}
			className={classes.sideButton}
		>
			<img src={props.icon} alt='button' />
		</button>
	);
};

export default SideButton;
