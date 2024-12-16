import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import AuthProvider from "src/app/admin/components/AuthProvider";
import SignOut from "./components/SignOut";

import "src/styles/globals.css";

// do not cache this layout
export const revalidate = 0;

export default async function AdminLayout({ children }) {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<div className="min-h-screen">
			<main className="w-full">
				<header className="w-full relative top-0 bg-dark-800 p-4 flex mx-auto justify-between items-center">
					<img src="logo.svg" alt="" />
					<h1 className="text-3xl">Admin</h1>

					<SignOut />
				</header>
				<AuthProvider accessToken={session?.access_token}>
					{children}
				</AuthProvider>
			</main>
		</div>
	);
}
