import React from "react";
import classes from "./MiniButton.module.css";
const MiniButton = (props) => {
	return (
		<button
			onClick={props.whenClicked}
			style={{
				backgroundColor: props.color,
				width: props.width,
				height: props.height,
			}}
			label={props.label}
			className={classes.miniButton}
		>
			<img src={props.icon} alt='button' />
		</button>
	);
};

export default React.memo(MiniButton);
