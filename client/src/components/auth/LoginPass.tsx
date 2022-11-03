import { useState } from "react";
import { InputChange } from "../../utils/Type";


export const LoginPass = () => {
	const initialState = { account: '', password: '' }
	const [login, setLogin] = useState(initialState)
	const { account, password } = login

	const changeHandler = (e: InputChange) => {
		const { value, name } = e.target
		setLogin({...login, [name]: value})
	}

	return <form>
		<div className="form-group">
			<label htmlFor="account">Email / Phone number</label>
			<input
				type="text"
				className='form-control'
				id='account'
				name='account'
				value={account}
				onChange={changeHandler}
			/>
		</div>
	</form>

}
