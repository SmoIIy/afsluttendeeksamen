import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignOut from "src/app/admin/components/SignOut";
import NewDate from "./components/Newdate";
import grapItems from "../utils/actions/grabitems";
import Newitems from "./components/Newitems";
import Confirmeditems from "./components/Confirmeditems";

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
	console.log("Nye items er:  ", newItems);
	console.log("Confirmed items er: ", confirmedItems);

	return (
		<div>
			<header className="w-full relative top-0 bg-dark-800 p-4 flex mx-auto justify-between items-center">
				<img src="logo.svg" alt="" />
				<h1 className="text-3xl">Admin</h1>

				<SignOut />
			</header>
			<section className="p-4 mx-auto grid grid-cols-1 md:grid-cols-2">
				{!user && <p>Not logged in</p>}
				<h1 className="sr-only">Hej Per!</h1>
				<Newitems />
				<Confirmeditems />
			</section>
		</div>
	);
}
