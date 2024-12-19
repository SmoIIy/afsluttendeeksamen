import cn from "classnames";
import Image from "next/image";
import nyde from "../../assets/nyde.webp";

export default async function Hvemerper({ className }) {
	return (
		<section
			className={cn(
				className,
				"max-w-6xl mx-auto p-6 lg:p-0 grid grid-cols-1 md:grid-cols-2",
			)}
		>
			<div className="max-w-[467px]">
				<h1 className="mb-4 lg:mb-7 mt-10 lg:leading-none">
					Hvem er DJ Per?
				</h1>
				<p className="mb-4 max-w-prose">
					Jeg er DJ Per, og jeg brænder for at skabe øjeblikke, hvor
					dansegulvet er fyldt, og stemningen er helt i top. Med en
					kærlighed til musik og erfaring fra mange forskellige events
					sørger jeg for, at musikken altid passer perfekt til festen
					og giver dig og dine gæster en oplevelse, I sent vil glemme.
				</p>
			</div>
			<Image
				src={nyde}
				alt="Billede af per"
				className="w-full object-cover rounded-br-[40px] rounded-tl-[40px]"
			/>
		</section>
	);
}
