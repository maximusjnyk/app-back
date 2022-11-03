import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFoundPage";
import { Home } from "../pages/Home";



const Routers = () => {
	return <>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='/register' element={<Register/>}/>
			<Route path='*' element={<NotFound/>}/>
		</Routes>
	</>
}

export default Routers