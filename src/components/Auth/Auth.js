import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./Auth.module.css";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";

const Auth = () => {
	return (
		<div className={classes.authContainer}>
			<Switch>
				<Route path='/home/auth' exact>
					<Redirect to='/home/auth/signup' />
				</Route>
				<Route path='/home/auth/signup'>
					<Signup />
				</Route>
				<Route path='/home/auth/login'>
					<Login />
				</Route>
			</Switch>
		</div>
	);
};

export default Auth;
