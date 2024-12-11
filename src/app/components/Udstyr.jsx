import cn from "classnames";
import Image from "next/image";

export default async function Udstyr({ className }) {
	return (
		<section
			className={cn(
				className,
				"mx-auto dark-bg px-4 md:px-32 py-16 lg:py-32",
			)}
		>
			<div className="flex flex-col lg:flex-row gap-16 justify-center">
				<article className="max-w-[533px] mb-4">
					<h3 className="text-cream-400 mb-4">
						Udstyr i bedste kvalitet
					</h3>
					<p className="mb-4">
						For mig er det vigtigt, at både musikken og lyden sidder
						lige i skabet. Derfor bruger jeg kun professionelt
						udstyr af højeste kvalitet. Jeg medbringer alt, hvad der
						skal til, herunder højttalere, pult, mikser, lys og alt
						imellem. Jeg sørger for, at alt er opsat og fungerer som
						det skal.
					</p>
					<p>
						Så kan du roligt læne dig tilbage, være til stede i
						øjeblikket og nyde festen, mens jeg tager mig af
						teknikken.
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
