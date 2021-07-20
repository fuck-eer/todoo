import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	token: "",
	expTimeStamp: "",
};

const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		// atSignup(state, action) {},
		atLogin(state, action) {
			state.email = action.payload.name;
			state.token = action.payload.token;
			state.expTimeStamp = action.payload.expTimeStamp;
		},
		atLogout(state) {
			state.email = "";
			state.token = "";
			state.expTimeStamp = "";
		},
	},
});

export default authSlice.reducer;
export const authSliceActions = authSlice.actions;
