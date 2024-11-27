import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignOut from "src/app/admin/components/SignOut";
import NewDate from "./components/Newdate";
import grapItems from "../utils/actions/grabitems";

export default async function Profile() {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/admin/sign-in");
	}
	const items = await grapItems();
	console.log(items);

	return (
		<div className="card">
			{!user && <p>Not logged in</p>}
			<h2>User Profile</h2>
			{items && items.map((item, key) => <NewDate data={item} />)}

			<div className="heading">Last Signed In:</div>

			<Link className="button" href="/">
				Go Home
			</Link>
			<SignOut />
		</div>
	);
}
