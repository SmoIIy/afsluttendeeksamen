import cn from "classnames";
import Image from "next/image";
import udstyr1 from "../../assets/udstyr1.webp";
import udstyr2 from "../../assets/udstyr2.webp";
import udstyr3 from "../../assets/udstyr3.webp";

export default async function Udstyr({ className }) {
	return (
		<section
			className={cn(
				className,
				"mx-auto dark-bg px-6 md:px-32 py-16 lg:py-32",
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
					<Image
						className="col-span-2"
						src={udstyr1}
						alt="billede af dj pult"
					/>
					<Image
						className="aspect-square object-cover"
						src={udstyr2}
						alt="billede af dj per"
					/>
					<Image
						className="aspect-square object-cover"
						src={udstyr3}
						alt="billede af dj pult"
					/>
				</div>
			</div>
		</section>
	);
}
