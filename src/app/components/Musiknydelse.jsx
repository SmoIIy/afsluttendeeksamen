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
						Sammen kan vi få gang i festen og skabe den helt rette
						atmosfære. Uanset om det er et bryllup, en firmafest
						eller en privat fest, er vi klar til at skræddersy
						musikken, så din begivenhed bliver uforglemmelig.
					</p>
					<p>
						Sammen kan vi få gang i festen og skabe den helt rette
						atmosfære. Uanset om det er et bryllup, en firmafest
						eller en privat fest, er vi klar, så din begivenhed
						bliver uforglemmelig.
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
