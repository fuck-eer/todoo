// import { log } from "async";
import axios from "axios";
import { authSliceActions } from "../AuthSlice";

let timer;
export const loginAction = (email, password) => {
	return (dispatch) => {
		axios
			.post("http://localhost:3050/auth/login", {
				name: email,
				password,
			})
			.then((data) => {
				const userData = data.data;
				let dataStored;
				// console.log(typeof userData.expiresIn);
				const expTimeStamp = new Date().getTime() + userData.expiresIn * 1000;

				dataStored = {
					name: userData.name,
					expTimeStamp,
					token: userData.token,
				};
				localStorage.setItem("userData", JSON.stringify(dataStored));
				dispatch(authSliceActions.atLogin(dataStored));
				dispatch(autoLogout(expTimeStamp));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const autoLoginAction = () => {
	return (dispatch) => {
		const loadedUser = JSON.parse(localStorage.getItem("userData"));
		if (!loadedUser) {
			return;
		}
		const expDate = new Date(+loadedUser.expTimeStamp);
		if (new Date() >= expDate) {
			dispatch(logoutAction());
		}
		dispatch(authSliceActions.atLogin(loadedUser));
		dispatch(autoLogout(+loadedUser.expTimeStamp));
	};
};

export const logoutAction = () => {
	return (dispatch) => {
		localStorage.removeItem("userData");
		dispatch(authSliceActions.atLogout());
		clearTimeout(timer);
	};
};

export const autoLogout = (expTimeStamp) => {
	return (dispatch) => {
		const remTime = expTimeStamp - new Date().getTime();
		console.log(remTime);
		timer = setTimeout(() => {
			dispatch(logoutAction());
		}, remTime);
	};
};
