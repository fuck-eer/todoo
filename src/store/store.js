import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import todoSlice from "./TodoSlice";

const store = configureStore({
	reducer: { authSlice, todoSlice },
});

export default store;
