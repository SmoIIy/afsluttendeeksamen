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
				<AuthProvider accessToken={session?.access_token}>
					{children}
				</AuthProvider>
			</main>
		</div>
	);
}
