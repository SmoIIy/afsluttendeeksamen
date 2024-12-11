import cn from "classnames";

export default async function Kommentarer({ className }) {
	return (
		<section className={cn(className, "mx-auto max-w-6xl")}>
			<h3 className="text-center text-cream-400">Glade og gode vibes </h3>
			<h4 className="text-center mb-10">Læs hvad andre siger</h4>
			<div className="w-full grid md:grid-cols-3">
				<div className="p-4">
					<p>
						"Musikken var helt spot on, og DJ Per fik alle til at
						danse. Alt udstyr og opsætning fungerede perfekt. Kan
						varmt anbefales!"
					</p>
					<p className="p-3 font-bold"> - Marie Nielsen </p>
				</div>
				<div className="p-10">
					<p>
						“DJ Per var helt fantastisk til vores bryllup! Han havde
						styr på alt fra start til slut, og musikken ramte lige i
						øjet for både os og gæsterne. Udstyret og lyset gjorde
						det hele endnu federe. Tak for en uforglemmelig aften!”
					</p>
					<p className="p-3 font-bold"> - Louise og Anders</p>
				</div>
				<div className="p-4 ">
					<p>
						“Fra opsætningen til musikken var alt i topklasse. DJ
						Per gjorde vores firmafest til en aften, vi sent vil
						glemme. Kan kun anbefales!”
					</p>
					<p className="p-3 font-bold"> - Henrik Petersen</p>
				</div>
			</div>
		</section>
	);
}
