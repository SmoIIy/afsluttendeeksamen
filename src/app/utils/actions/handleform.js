"use server";

import { supabase } from "../supabase/settings";

export default async function handleForm(formdata) {
	const formData = [
		{
			date: "2017-06-01",
			firstname: "Janus",
			lastname: "Bardrum",
			email: "test@test.dk",
		},
	];

	const { data, error } = await supabase
		.from("test")
		.insert(formData)
		.select();

	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
}
