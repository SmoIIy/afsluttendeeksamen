import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignOut from "src/app/admin/components/SignOut";
import NewDate from "./components/Newdate";
import grapItems from "../utils/actions/grabitems";
import Test from "./components/Test";

export default async function Profile() {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/admin/sign-in");
	}
	const newItems = await grapItems("test");
	const confirmedItems = await grapItems("deleted");
	console.log("Nye items er: ", newItems);
	console.log("Confirmed items er: ", confirmedItems);

	return (
		<div className="card">
			{!user && <p>Not logged in</p>}
			<h2>Hej Per!</h2>
			<div className="bg-utility-notice">
				{newItems &&
					newItems.map((item) => (
						<NewDate data={item} key={item.id} />
					))}
			</div>
			<div className="bg-green-400">
				{confirmedItems &&
					confirmedItems.map((item) => (
						<NewDate data={item} key={item.id} />
					))}
			</div>
			<Test />

			<div className="heading">Last Signed In:</div>

			<Link className="button-primary" href="/">
				Go Home
			</Link>
			<SignOut />
		</div>
	);
}
