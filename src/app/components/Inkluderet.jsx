import Image from "next/image";
import cn from "classnames";
import kuffert from "../../assets/kuffert.jpg";

export default async function Indkluderet({ className }) {
	return (
		<section className={cn(className, "max-w-6xl mx-auto p-4 md:p-0")}>
			<h3 className="text-cream-400 md:text-6xl mb-8 text-center">
				Hvad er inkluderet i din DJ-booking?
			</h3>
			<div className="flex flex-col md:flex-row gap-14">
				<article className="max-w-[570px]">
					<h4 className="mb-5 text-3xl md:text-4xl">
						Jeg sørger for det hele
					</h4>
					<p>
						Når du booker mig som din DJ, får du en komplet
						festoplevelse. Jeg sørger for alt fra professionelt lyd-
						og lysudstyr til musik, der er skræddersyet præcist
						efter dine ønsker. Så du kan fokusere på at nyde din
						fest uden bekymringer.
					</p>
					<h4 className="mb-5 text-3xl md:text-4xl">
						Her er oversigt over mit udstyr:
					</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maiores ipsa harum, laboriosam ex error doloribus neque
						sit praesentium quibusdam eius autem quod explicabo
						corrupti ullam nostrum omnis perspiciatis. Dolorem, ab!
					</p>
				</article>
				<Image src={kuffert} alt="billede af mand med kuffert"></Image>
			</div>
		</section>
	);
}
