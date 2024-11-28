import Link from "next/link";
import Button from "./components/Button";

import Form from "./components/Form";

export default async function Home() {
	return (
		<div className="card bg-dark-700">
			<Button
				className="bg-green-400 text-dark-400 border-green-400 hover:bg-transparent hover:text-green-400"
				body="Button"
				anchor="/"
			/>
			<Button
				className="bg-transparent text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-dark-400"
				body="Button"
				anchor="/"
			/>
			<h2>Welcome!</h2>
			{/* <code className="highlight">{user.role}</code> */}
			<Link className="button" href="/profile">
				Go to Profile
			</Link>
			{/* <SignOut /> */}
			<Form />
		</div>
	);
}
