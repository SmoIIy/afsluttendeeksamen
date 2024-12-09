import cn from "classnames";
import Image from "next/image";
import perportræt from "../../assets/perportræt.jpg";

export default async function Hvemerper({ className }) {
	return (
		<section className={cn(className, "max-w-6xl mx-auto p-4 lg:p-0")}>
			<h1 className="mb-4">Hvem er DJ Per?</h1>
			<p className="mb-4 max-w-prose">
				Sammen kan vi få gang i festen og skabe den helt rette
				atmosfære. Uanset om det er et bryllup, en firmafest eller en
				privat fest, er vi klar til at skræddersy musikken, så din
				begivenhed bliver uforglemmelig.
			</p>
			<Image src={perportræt} alt="Billede af per" />
		</section>
	);
}
