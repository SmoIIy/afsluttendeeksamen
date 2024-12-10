import Image from "next/image";
import cn from "classnames";
import Button from "./Button";

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
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
				<img src="https://picsum.photos/400/500" alt="" />
			</div>
		</section>
	);
}
