import Image from "next/image";
import cn from "classnames";
import udstyr from "../../assets/udstsyr1.jpg";
export default async function Opsætning({ className }) {
	return (
		<section
			className={cn(
				className,
				"dark-bg max-w-7xl mx-auto md:px-32 py-16 lg:py-36",
			)}
		>
			<h3>Opsætning af udstyr</h3>
			<div>
				<Image src={udstyr} alt="Udstyr " />
				<article></article>
			</div>
		</section>
	);
}
