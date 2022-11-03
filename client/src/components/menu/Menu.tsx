import { Link } from "react-router-dom";

const  loginLinks = [
	{label: 'Login', path: '/login'},
	{label: 'Registration', path: '/register'}
]

export const Menu = () => {
	return 				<ul className="navbar-nav ms-auto">
		{loginLinks.map((item, index) => (
			<li className="nav-item" key={index}>
				<Link className="nav-link active" aria-current="page"  to={item.path}> {item.label}</Link>
			</li>
		))}
		<li className="nav-item dropdown">
						<span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
						      data-bs-toggle="dropdown" aria-expanded="false">
							UserName
						</span>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				<li><Link className="dropdown-item" to="/profile">Profile</Link></li>
				<li><Link className="dropdown-item" to="/">Logout</Link></li>
			</ul>
		</li>
	</ul>

}

