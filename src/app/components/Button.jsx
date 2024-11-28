import cn from "classnames";

export default async function Button({ anchor, body, className }) {
	return (
		<a
			className={cn(
				className,
				"px-8 py-1 border-4 text-lg rounded-tl-2xl rounded-br-2xl transition-all",
			)}
			href={anchor}
		>
			{body}
		</a>
	);
}
