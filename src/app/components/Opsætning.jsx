import Image from "next/image";
import cn from "classnames";
import udstyr from "../../assets/udstsyr1.jpg";
export default async function Opsætning({ className }) {
	return (
		<section
			className={cn(className, "dark-bg mx-auto md:px-32 py-16 lg:py-32")}
		>
			<h3 className="text-center text-purple-400 mb-4">
				Opsætning af udstyr
			</h3>
			<div className="flex gap-20">
				<Image src={udstyr} alt="Udstyr" />
				<article className="flex flex-col gap-4 md:min-w-[445px]">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptatr. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia
						deserunt mollit anim id est laborum.
					</p>
					<h4>Har du brug for tidlig opsætning?</h4>
					<p>
						Vestibulum conubia donec netus imperdiet volutpat proin
						porttitor? Lacus mi cursus arcu semper at vel. Auisus.{" "}
					</p>
				</article>
			</div>
		</section>
	);
}
