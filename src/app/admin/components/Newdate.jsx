export default function NewDate({ data }) {
	return (
		<div className="flex gap-4 border p-4">
			<p>{data.date}</p>
			<p>
				{data.firstname} {data.lastname}
			</p>
			<p>{data.email}</p>
			<p>phone</p>
		</div>
	);
}
