import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
	const isLoggedIn = Boolean(localStorage.getItem("access_token"));

	if (!isLoggedIn) {
		return <Navigate to='/auth/login' replace />;
	}

	return children;
}
