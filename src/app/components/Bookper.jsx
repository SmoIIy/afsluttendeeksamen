import cn from "classnames";
import Button from "./Button";

export default async function BookPer({ className }) {
	return (
		<section className={cn(className, "max-w-5xl mx-auto p-6 lg:p-0")}>
			<h1 className="">Sådan booker du DJPer</h1>
			<div className="flex flex-col lg:flex-row justify-center gap-20">
				<div className="max-w-[490px] flex flex-col gap-4">
					<h4 className=" text-cream-300">
						Book nemt DJ Per til dit ønskede arangement.{" "}
					</h4>
					<p className="max-w-[421px]">
						Sammen kan vi få gang i festen og skabe den helt rette
						atmosfære. Uanset om det er et bryllup, en firmafest
						eller en privat fest, er vi klar til at skræddersy
						musikken, så din begivenhed bliver uforglemmelig.
					</p>
				</div>
				<div className="max-w-[490px] flex flex-col gap-4">
					<h4 className=" text-cream-300">
						Er du klar til at få din fest i gang?{" "}
					</h4>
					<p>
						Her finder du alt, hvad du skal vide om din booking. Jeg
						sørger for, at det hele er så nemt som muligt - alt, du
						skal gøre, er at udfylde oplysningerne længere nede på
						siden!
					</p>
					<Button
						anchor="#bookingformular"
						className="button-secondary"
						body="Gå direkte til booking"
					/>
				</div>
			</div>
		</section>
	);
}
