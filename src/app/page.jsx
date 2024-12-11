import Image from "next/image";
import Button from "./components/Button";
import Footer from "./components/Footer";
import logo from "../assets/Logo.png";
import Header from "./components/Header";

export default async function Home() {
	return (
		<div className="w-full min-h-screen bg-dark-400 bg-[url('/bg_forside.jpg')] bg-no-repeat bg-cover">
			<Header />
			<main className="mx-auto h-full w-full flex flex-col justify-center items-center mt-16">
				<h2 className="font-syne font-normal text-3xl md:text-6xl text-cream-200 mb-4">
					Velkommen til
				</h2>
				<h1 className="sr-only">DJ Per</h1>
				<Image
					src={logo}
					alt="Logo"
					className="mb-4 w-3/5 md:max-w-[537px]"
				/>
				<p className="text-cream-200 md:max-w-[537px] px-12 text-center mb-4">
					Skab den perfekte stemning med DJ Per! Professionel DJ, der
					leverer uforglemmelige beats til enhver fest. Book nu og
					løft din begivenhed til næste niveau!
				</p>
				<div className="flex flex-col md:flex-row gap-4">
					<Button
						body="Læs mere om booking"
						anchor="/booking"
						className="button-primary"
					/>
					<Button
						body="Læs mere om per"
						anchor="/om"
						className="button-secondary"
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}
