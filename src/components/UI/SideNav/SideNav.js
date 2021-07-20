import React from "react";
import FriendList from "../../FriendList/FriendList";
import SearchBar from "../SerchBar/SearchBar";
import classes from "./SideNav.module.css";

const SideNav = () => {
	return (
		<div className={classes.SideNavCont}>
			<SearchBar />
			<FriendList />
		</div>
	);
};

export default SideNav;
