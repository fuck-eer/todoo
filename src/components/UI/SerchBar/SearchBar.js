import React from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../../../assets/icons/search.png";

const SearchBar = () => {
	return (
		<div className={classes.searchBar}>
			<input type='text' />
			<img src={searchIcon} alt='searchIcon' />
		</div>
	);
};

export default SearchBar;
