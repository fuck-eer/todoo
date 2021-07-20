import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import classes from "../../components/Layout/Layout.module.css";
import Quote from "../../components/UI/Quote/Quote";
const Homepage = () => {
	return (
		<>
			<div className={classes.QuoteSec}>
				<Quote />
			</div>
			<div className={classes.activityArea}>
				<Switch>
					<Route path='/home' exact>
						<Redirect to='/home/auth' />
					</Route>
					<Route path='/home/auth'>
						<Auth />
					</Route>
					<Route path='/home/instruction'></Route>
				</Switch>
			</div>
		</>
	);
};

export default Homepage;
