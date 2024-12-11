import Image from "next/image";

import Link from "next/link";

export default async function Footer() {
	return (
		<footer className="max-w-7xl mt-10 text-cream-400 flex justify-between border-t-2 border-t-cream-400 px-10 py-4 mx-auto md:mx-auto font-light sticky top-[100vh]">
			<div className="">
				<ul className="flex md:flex-row flex-col md:gap-14 gap-6">
					<li>
						<Link className="relative group" href="/">
							Forside
							<span className="hover-underline" />
						</Link>
					</li>
					<li>
						<Link className="relative group" href="/booking">
							Booking
							<span className="hover-underline" />
						</Link>
					</li>
					<li>
						<Link className="relative group" href="/kontakt">
							Kontakt
							<span className="hover-underline" />
						</Link>
					</li>
				</ul>
			</div>
			<div className="">
				<ul className="flex md:flex-row flex-col md:gap-14 gap-6">
					<li>
						<a href="facebook.com" target="_blank">
							<Image
								src="/facebook.svg"
								width={25}
								height={25}
								alt="logo"
							/>
						</a>
					</li>
					<li>
						<a href="instagram.com" target="_blank">
							<Image
								src="/insta.svg"
								width={25}
								height={25}
								alt="logo"
							/>
						</a>
					</li>
					<li>
						<a href="spotify.com" target="_blank">
							<Image
								src="/spotify.svg"
								width={25}
								height={25}
								alt="logo"
							/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
