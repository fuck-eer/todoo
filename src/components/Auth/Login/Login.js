import React, { useState } from "react";
import classes from "../SignUp/Signup.module.css";
import goArrow from "../../../assets/icons/formArrow.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../store/Actions/authActions";
const Login = () => {
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const emailChangeHandler = (event) => {
		setemail(event.target.value);
	};
	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const onSub = (event) => {
		event.preventDefault();
		dispatch(loginAction(email, password));
	};

	return (
		<div className={classes.signupForm}>
			<div className={classes.formHead}>
				<p className={classes.subHd}>Welcome back</p>
				<p className={classes.mainHd}>LOG IN</p>
			</div>
			<form onSubmit={onSub} className={classes.form}>
				{/* <div className={classes.inp}>
					<label htmlFor='userName'>Username</label>
					<input type='text' name='userName' id='userName' />
				</div> */}
				<div className={classes.inp}>
					<label htmlFor='email'>Email</label>
					<input
						onChange={emailChangeHandler}
						type='text'
						name='email'
						id='email'
					/>
				</div>
				<div className={classes.inp}>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						onChange={passwordChangeHandler}
						id='password'
					/>
				</div>
				<div className={`${classes.inp} ${classes.inpo}`}>
					<Link to='/home/auth/signup'>New Here?</Link>
					<button className={classes.buttonform}>
						<img src={goArrow} alt='Go' />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
