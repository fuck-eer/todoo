import classes from "./Signup.module.css";
import React from "react";
import goArrow from "../../../assets/icons/formArrow.png";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<div className={classes.signupForm}>
			<div className={classes.formHead}>
				<p className={classes.subHd}>Getting Started</p>
				<p className={classes.mainHd}>SIGN UP</p>
			</div>
			<form className={classes.form}>
				<div className={classes.inp}>
					<label htmlFor='userName'>Username</label>
					<input type='text' name='userName' id='userName' />
				</div>
				<div className={classes.inp}>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' />
				</div>
				<div className={classes.inp}>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' id='password' />
				</div>
				<div className={`${classes.inp} ${classes.inpo}`}>
					<Link to='/home/auth/login'>Already have an account?</Link>
					<button className={classes.buttonform}>
						<img src={goArrow} alt='Go' />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
