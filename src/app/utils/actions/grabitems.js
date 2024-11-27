import { supabase } from "../supabase/settings";

export default async function grapItems() {
	const { data: test, error } = await supabase.from("test").select("*");
	if (error) {
		return error;
	}
	return test;
}
