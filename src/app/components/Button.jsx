import cn from "classnames";
import Link from "next/link";

export default function Button({ anchor, body, className }) {
	return (
		<Link className={cn(className, "text-base md:text-xl")} href={anchor}>
			{body}
		</Link>
	);
}
