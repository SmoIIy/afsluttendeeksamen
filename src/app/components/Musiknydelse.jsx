import cn from "classnames";
import Image from "next/image";
import image from "../../assets/udstyr2.webp";

export default async function Musiknydelse({ className }) {
	return (
		<section
			className={cn(
				className,
				"mx-auto dark-bg px-6 md:px-32 py-16 lg:py-32",
			)}
		>
			<div className="flex flex-col gap-4 lg:gap-16 lg:flex-row justify-center items-center">
				<Image
					src={image}
					alt="image"
					className=" max-h-[525px] rounded-br-[40px] rounded-tl-[40px] object-cover"
				/>

				<article className="max-w-[500px] mb-4">
					<h3 className="text-cream-400 mb-4">Musik alle kan nyde</h3>
					<p className="mb-4">
						Når jeg spiller til dit event, er det vigtigste for mig,
						at musikken passer til dig og dine gæster. Sammen finder
						vi den helt rigtige stemning til din fest. Jeg nyder at
						spille de nyeste hits, men har også en stor kærlighed
						til tidløse klassikere fra alle årtier – fra ikoniske
						numre fra 70’erne og 80’erne til nutidens største
						tracks.
					</p>
					<p>
						Uanset din musiksmag kan du regne med, at jeg skaber et
						varieret og tilpasset set, der sikrer, at alle får en
						oplevelse, de vil huske. Denne version integrerer den
						nye sætning og fremstår sammenhængende og professionel.
					</p>
				</article>
			</div>
		</section>
	);
}
