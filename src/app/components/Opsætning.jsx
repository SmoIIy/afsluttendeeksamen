import Image from "next/image";
import cn from "classnames";
import udstyr from "../../assets/udstsyr1.jpg";
export default async function Opsætning({ className }) {
	return (
		<section
			className={cn(
				className,
				"dark-bg mx-auto px-6 md:px-32 py-16 lg:py-32",
			)}
		>
			<h3 className="text-center  mb-4">Opsætning af udstyr</h3>
			<div className="flex flex-col md:flex-row md:gap-20">
				<Image src={udstyr} alt="Udstyr" />
				<article className="flex flex-col gap-4 mt-4 md:mt-0 md:min-w-[445px]">
					<p>
						Når jeg ankommer til et event, begynder jeg med at
						sikre, at alt udstyr er klar til brug. Jeg opsætter
						højttalere, mixerpult, mikrofoner og eventuelle
						lysinstallationer, så det passer til lokationen og
						eventets behov. Før eventet går i gang, gennemgår jeg
						alle systemer, tester lyden og finjusterer, så alt kører
						perfekt. På den måde kan du være helt sikker på, at din
						fest forløber uden tekniske udfordringer.
					</p>
					<h4>Har du brug for tidlig opsætning?</h4>
					<p>
						Har du brug for tidlig opsætning? Hvis du har behov for
						det, kan jeg komme i god tid, så alt er klar før festen.
					</p>
				</article>
			</div>
		</section>
	);
}
