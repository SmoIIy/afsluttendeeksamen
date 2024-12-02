import cn from "classnames";
import Link from "next/link";

export default function Button({ anchor, body, className }) {
	return (
		<Link className={cn(className, "")} href={anchor}>
			{body}
		</Link>
	);
}
