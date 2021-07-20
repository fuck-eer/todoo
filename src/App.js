import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import reactDom from "react-dom";
import { Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import MyTodos from "./pages/MyTodos/MyTodos";
import { useDispatch, useSelector } from "react-redux";
import { autoLoginAction } from "./store/Actions/authActions";

function App() {
	const authSlice = useSelector((state) => state.authSlice);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(autoLoginAction());
		return () => {};
	}, [dispatch]);

	return (
		<Layout>
			{reactDom.createPortal(
				<p>
					<span className='hash'>#</span>TO-DOER for doers.
				</p>,
				document.getElementById("tagline")
			)}
			{/* //routes */}
			<Switch>
				<Route path='/' exact>
					<Redirect to='/home' />
				</Route>
				<Route path='/home'>
					{!authSlice.token && <Homepage />}
					{authSlice.token && <Redirect to='/myTodos' />}
				</Route>
				{authSlice.token && (
					<Route path='/myTodos'>
						<MyTodos />
					</Route>
				)}
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
