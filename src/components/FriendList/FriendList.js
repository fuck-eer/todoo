import React from "react";
import classes from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
const FriendList = () => {
	return (
		<div className={classes.List}>
			<div className={classes.head}>
				<p>Friend List</p>
			</div>
			<div className={classes.listCont}>
				<FriendListItem />
				<FriendListItem />
				<FriendListItem />
			</div>
		</div>
	);
};

export default FriendList;
