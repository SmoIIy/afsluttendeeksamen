import Header from "../components/Header";
import Footer from "../components/Footer";
import Hvemerper from "../components/Hvemerper";
import Musiknydelse from "../components/Musiknydelse";
import Kommentarer from "../components/Kommentarer";
import Udstyr from "../components/Udstyr";
import Instagramfeed from "../components/Instagramfeed";
import Spotify from "../components/Spotify";

export default async function Om() {
	return (
		<div className="min-h-screen bg-[url('/bg_om.webp')] bg-no-repeat bg-cover">
			<Header />
			<main>
				<Hvemerper className="mb-20" />
				<Musiknydelse className="lg:my-60 my-20" />
				<Udstyr className="lg:my-60 my-20" />
				<Kommentarer className="lg:my-60 my-20" />
				<Instagramfeed className="lg:my-60 my-20" />
				<Spotify className="lg:my-60 my-20" />
			</main>
			<Footer />
		</div>
	);
}
