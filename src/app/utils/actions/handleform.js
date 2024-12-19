"use server";

import { supabase } from "../supabase/settings";

export default async function handleForm(formdata) {
	const { data, error } = await supabase
		.from("new")
		.insert(formdata)
		.select();
}
