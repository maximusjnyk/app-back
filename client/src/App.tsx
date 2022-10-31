import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFoundPage";



export const App = () => {
	return <div>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='/register' element={<Register/>}/>
			<Route path='*' element={<NotFound/>} />
		</Routes>
	</div>


}

/*qwe*/