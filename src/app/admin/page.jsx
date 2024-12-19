import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignOut from "src/app/admin/components/SignOut";
import grapItems from "../utils/actions/grabitems";
import Newitems from "./components/Newitems";
import Confirmeditems from "./components/Confirmeditems";
import Guide from "./components/Guide";

export default async function Profile() {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/admin/sign-in");
	}

	return (
		<div>
			<header className="w-full relative top-0 bg-dark-800 p-4 flex mx-auto justify-between items-center">
				<img src="../logo.svg" alt="" className="max-w-8 md:max-w-96" />
				<h1 className="text-base md:text-3xl">Admin</h1>

				<SignOut />
			</header>
			<section className="p-4 mx-auto grid grid-cols-1 md:grid-cols-2">
				{!user && <p>Not logged in</p>}
				<Guide
					body="Dette er adminsiden for DJ Per. Her ses alle indkommende
						henvendelser fra kontaktformen på hjemmesiden. Når en
						aftale er bekræftet med kunden, kan henvendelsen flyttes
						hen til 'Bekræftede henvendelser', ved brug af knappen
						på hver henvendelse. Ved samme knap kan henvendelsen
						også slettes, enten hvis der ikke kan laves en aftale,
						eller hvis arrangementet er afholdt. Pt vil intet blive
						slettet hvis ikke der bliver handlet, selv hvis datoen
						overskrides."
				/>

				<Newitems />
				<Confirmeditems />
			</section>
		</div>
	);
}
