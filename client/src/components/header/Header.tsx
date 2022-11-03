import { Link } from "react-router-dom";
import { Search } from "../search/Search";
import { Menu } from "../menu/Menu";

export const Header = () => {
	return <header>
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<div className="container-fluid">
				<Link className="navbar-brand" to='/'><h3>Maximus Blog</h3></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navBarNav" aria-controls="navBarNav"
				        aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navBarNav">
					<Search/>
					<Menu/>
				</div>
			</div>
		</nav>
	</header>
};



