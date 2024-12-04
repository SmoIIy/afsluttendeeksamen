import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../../assets/kontakt-image.jpg";

export default async function Kontakt() {
	return (
		<div className="w-full min-h-screen bg-dark-400 bg-[url('/bg_kontakt.jpg')]  bg-no-repeat bg-cover">
			<Header />
			<main className="justify-center flex items-center gap-12">
				<article className="prose text-cream-200 max-w-lg">
					<h1 className="font-syne font-bold text-6xl text-cream-200">
						Kontakt
					</h1>
					<p className="">
						Har du spørgsmål eller brug for mere information? Jeg er
						klar til at hjælpe! Udfyld formularen herunder, eller
						kontakt mig direkte - så vender jeg hurtigt tilbage.
					</p>
					<div className="flex flex-col gap-10">
						<div className="flex gap-8 items-center not-prose mb-4">
							<img
								src="/mailicon.svg"
								alt=""
								className="inline mr-1 w-8"
							/>
							<p>mail@mail.com</p>
						</div>
						<div className="flex gap-8 items-center not-prose mb-4">
							<img
								src="/tlficon.svg"
								alt=""
								className="inline mr-1 w-7"
							/>
							<p>Telefon: +45 8888 8888</p>
						</div>
						<div className="flex gap-8 items-center not-prose mb-4">
							<img
								src="/adresseicon.svg"
								alt=""
								className="inline mr-1 w-7"
							/>
							<p>Adresse</p>
						</div>
					</div>
				</article>
				<Image
					src={image}
					alt="Billede af Per der går med sin pult under armen"
					className="rounded-tl-3xl rounded-br-3xl"
				/>
			</main>
			<Footer />
		</div>
	);
}
