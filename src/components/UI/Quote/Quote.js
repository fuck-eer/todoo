import React from "react";
import classes from "./Quote.module.css";
import discoverLogo from "../../../assets/icons/discoverArrow.png";

const Quote = () => {
	return (
		<div className={classes.QuoteContainer}>
			<div className={classes.tag}>
				<p>Plan</p>
			</div>
			<div className={classes.keywords}>
				<p>Alive.</p>
				<p>Discipline.</p>
				<p>Perseverance.</p>
				<p>Determination.</p>
			</div>
			<div className={classes.quote}>
				<p>
					There are no limits to what you can accomplish, except the limits you
					place on your own thinking.
				</p>
			</div>
			<div className={classes.symbol}>
				<img src={discoverLogo} alt='discover.' />
			</div>
		</div>
	);
};

export default Quote;
