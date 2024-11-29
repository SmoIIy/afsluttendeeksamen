import Link from "next/link";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default async function Home() {
	return (
		<div className="max-w-screen-lg bg-dark-400">
			<Button className="button-primary" body="Button" anchor="/" />
			<Button className="button-secondary" body="Button" anchor="/" />

			<h2>Welcome!</h2>
			{/* <code className="highlight">{user.role}</code> */}
			<Link className="button" href="/profile">
				Go to Profile
			</Link>
			{/* <SignOut /> */}
			<Form />
			<Footer />
		</div>
	);
}
