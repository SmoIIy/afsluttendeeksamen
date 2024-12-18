import cn from "classnames";
import Image from "next/image";
import perportræt from "../../assets/perportræt.jpg";

export default async function Hvemerper({ className }) {
	return (
		<section className={cn(className, "max-w-6xl mx-auto p-6 lg:p-0")}>
			<h1 className="mb-4">Hvem er DJ Per?</h1>
			<p className="mb-4 max-w-prose">
				Jeg er DJ Per, og jeg brænder for at skabe øjeblikke, hvor
				dansegulvet er fyldt, og stemningen er helt i top. Med en
				kærlighed til musik og erfaring fra mange forskellige events
				sørger jeg for, at musikken altid passer perfekt til festen og
				giver dig og dine gæster en oplevelse, I sent vil glemme.
			</p>
			<Image
				src={perportræt}
				alt="Billede af per"
				className="w-full max-h-[400px] object-cover"
			/>
		</section>
	);
}
