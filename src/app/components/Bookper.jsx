import Button from "./Button";

export default async function BookPer() {
	return (
		<section className="max-w-7xl mx-auto">
			<h1>Sådan booker du Per</h1>
			<div className="flex justify-between">
				<div className="max-w-[490px]">
					<h3 className="mb-4">
						Book nemt DJ Per til din ønskede arangement.{" "}
					</h3>
					<p>
						Sammen kan vi få gang i festen og skabe den helt rette
						atmosfære. Uanset om det er et bryllup, en firmafest
						eller en privat fest, er vi klar til at skræddersy
						musikken, så din begivenhed bliver uforglemmelig.
					</p>
				</div>
				<div className="max-w-[490px]">
					<h3 className="mb-4">
						Er du klar til at få din fest i gang?{" "}
					</h3>
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
