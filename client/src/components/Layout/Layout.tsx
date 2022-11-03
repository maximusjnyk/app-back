import { Header } from "../header/Header";
import Routers from "../../Router/Routers";
import { Footer } from "../footer/footer";

export const Layout = () => {
	return <main>
		<Header />
		<div>
			<Routers />
		</div>
		<Footer />
	</main>

}

