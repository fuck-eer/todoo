import React from "react";
import classes from "./Header.module.css";
import img from "../../../assets/icons/Applogo.png";
import avtar from "../../../assets/icons/avatarLogo.png";
const Header = () => {
	return (
		<header className={classes.mainHead}>
			<nav className={classes.mainNav}>
				<ul className={classes.listHolder}>
					<li className={classes.logoCont}>
						<img src={img} alt='Logo' />
					</li>
					<li className={classes.brandName}>
						<p>To-Doer</p>
					</li>
					<li className={classes.logoCont}>
						<img src={avtar} alt='Logo' />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
