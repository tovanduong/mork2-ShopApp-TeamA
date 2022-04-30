import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Info = React.lazy(() => import("./pages/Info"));
const Products = React.lazy(() => import("./pages/Products"));

export default function User() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/info' element={<Info />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</>
	);
}
