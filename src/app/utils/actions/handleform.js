"use server";

import { supabase } from "../supabase/settings";

export default async function handleForm(formdata) {
	// const formData = [
	// 	{
	// 		date: formdata.get("date"),
	// 		firstname: formdata.get("firstname"),
	// 		lastname: formdata.get("lastname"),
	// 		email: formdata.get("email"),
	// 		phone: formdata.get("phone"),
	// 		message: formdata.get("comment"),
	// 		event: formdata.get("event"),
	// 	},
	// ];

	const { data, error } = await supabase
		.from("new")
		.insert(formdata)
		.select();

	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
}
