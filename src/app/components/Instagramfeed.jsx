import Image from "next/image";
import cn from "classnames";
import Button from "./Button";
import instagram1 from "../../assets/insta1.png";
import instagram2 from "../../assets/insta2.png";
import instagram3 from "../../assets/insta3.png";
import instagram4 from "../../assets/insta4.png";

const images = [
	"https://picsum.photos/id/237/400/500",
	"https://picsum.photos/id/238/400/500",
	"https://picsum.photos/id/239/400/500",
	"https://picsum.photos/id/240/400/500",
	"https://picsum.photos/id/241/400/500",
	"https://picsum.photos/id/242/400/500",
	"https://picsum.photos/id/243/400/500",
	"https://picsum.photos/id/244/400/500",
];

export default async function Instagramfeed({ className }) {
	return (
		<section
			className={cn(
				className,
				"max-w-6xl mx-auto flex flex-col gap-4 p-4",
			)}
		>
			<h3 className="text-center">Følg med i hvad jeg laver</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<Image src={instagram1} alt="billede af per" />
				<Image src={instagram2} alt="billede af per" />
				<Image src={instagram3} alt="billede af per" />
				<Image src={instagram4} alt="billede af per" />
			</div>
			<Button
				anchor="instagram.com"
				body="Følg mig på instagram"
				className="button-secondary mx-auto"
			/>
		</section>
	);
}
