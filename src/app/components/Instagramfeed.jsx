import Image from "next/image";
import cn from "classnames";
import Button from "./Button";

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
			<Button
				anchor="instagram.com"
				body="Følg mig på instagram"
				className="button-secondary mx-auto"
			/>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{images &&
					images.map((url, index) => (
						<Image
							src={url}
							alt="pic"
							width={400}
							height={500}
							key={index}
						/>
					))}
			</div>
		</section>
	);
}
