import cn from "classnames";

export default async function Button({ anchor, body, className }) {
	return (
		<a className={cn(className, "")} href={anchor}>
			{body}
		</a>
	);
}
