import Header from "../components/Header";
import Footer from "../components/Footer";
import Hvemerper from "../components/Hvemerper";
import Musiknydelse from "../components/Musiknydelse";
import Kommentarer from "../components/Kommentarer";
import Udstyr from "../components/Udstyr";
import Instagramfeed from "../components/Instagramfeed";

export default async function Om() {
	return (
		<div className="min-h-screen bg-[url('/bg_om.jpg')] bg-no-repeat bg-cover">
			<Header />
			<main>
				<Hvemerper className="mb-20" />
				<Musiknydelse className="my-20" />
				<Udstyr className="my-20" />
				<Kommentarer className="my-20" />
				<Instagramfeed className="my-20" />
			</main>
			<Footer />
		</div>
	);
}
