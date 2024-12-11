import cn from "classnames";
import Image from "next/image";

export default async function Musiknydelse({ className }) {
	return (
		<section
			className={cn(
				className,
				"mx-auto dark-bg px-4 md:px-32 py-16 lg:py-32",
			)}
		>
			<h3 className="text-cream-400 text-center mb-4">
				Musik alle kan nyde
			</h3>
			<div className="flex flex-col lg:flex-row justify-center">
				<article className="max-w-[500px] mb-4">
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
				<div className="grid grid-cols-2 gap-4 max-w-[500px]">
					<img
						className="col-span-2"
						src="https://picsum.photos/500/270"
						alt=""
					/>
					<img
						className=""
						src="https://picsum.photos/245/150"
						alt=""
					/>
					<img
						className=""
						src="https://picsum.photos/245/150"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}
