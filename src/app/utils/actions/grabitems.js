import { supabase } from "../supabase/settings";

export default async function grapItems(table) {
	const { data: test, error } = await supabase.from(table).select("*");
	if (error) {
		return error;
	}
	return test;
}
