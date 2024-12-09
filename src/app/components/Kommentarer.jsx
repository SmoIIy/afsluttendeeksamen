import cn from "classnames";

export default async function Kommentarer({ className }) {
	return (
		<section className={cn(className, "mx-auto max-w-6xl")}>
			<h3 className="text-center text-cream-400">Glade og gode vibes </h3>
			<h4 className="text-center mb-10">Læs hvad andre siger</h4>
			<div className="w-full grid grid-cols-3">
				<div className="p-4">
					<p>
						“Lorem ipsum odor amet, adipiscing elit. Vestibulum cot
						vel. “
					</p>
					<p> - XXX XXXXX</p>
				</div>
				<div className="p-4">
					<p>
						"Lorem ipsum odor amet, elit. Vestibulum cot elit sem
						nostra torto pulvinar is class pellentesque."
					</p>
					<p> - XXXX XXXX</p>
				</div>
				<div className="p-4">
					<p>
						"Augue elit sem pulvinar nostra tortor mus risus.
						Volutpat laoreet vitae primis mollis class
						pellentesque."
					</p>
					<p> - XXXXXXX XXXX</p>
				</div>
			</div>
		</section>
	);
}
