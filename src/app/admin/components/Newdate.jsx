"use client";

import { supabase } from "src/app/utils/supabase/settings";

export default function NewDate({ data, key }) {
	return (
		<div className="flex gap-4 border p-4" key={key}>
			<p>ID: {data.id}</p>
			<p>{data.date}</p>
			<p>
				{data.firstname} {data.lastname}
			</p>
			<p>{data.email}</p>
			<p>{data.phone}</p>
			<button
				className="button-secondary"
				type="button"
				onClick={() => deleteItem(data, data.id)}
			>
				Flyt
			</button>
		</div>
	);
}

async function deleteItem(date, dateId) {
	const { data, insertError } = await supabase
		.from("deleted")
		.insert(date)
		.select();
	if (data) {
		console.log("inserted ", data);
	}
	if (insertError) {
		console.log("Error with insert: ", insertError);
	}
	const { error } = await supabase.from("test").delete().eq("id", dateId);
	if (error) {
		console.log(error);
	}
}
