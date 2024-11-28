import Image from "next/image";

export default async function Footer() {
	return (
		<footer className="max-w-full text-cream-400 flex justify-between border-t-2 border-t-cream-400 px-10 py-4 mx-4 md:mx-16">
			<div className="">
				<ul className="flex md:flex-row flex-col md:gap-14 gap-6">
					<li>
						<a href="/">Forside</a>
					</li>
					<li>
						<a href="/booking">Booking</a>
					</li>
					<li>
						<a href="/kontakt">Kontakt</a>
					</li>
				</ul>
			</div>
			<div className="">
				<ul className="flex md:flex-row flex-col md:gap-14 gap-6">
					<li>
						<a href="facebook.com">
							<Image
								src="/facebook.svg"
								width={25}
								height={25}
								alt="logo"
							/>
						</a>
					</li>
					<li>
						<a href="instagram.com">
							<Image
								src="/insta.svg"
								width={25}
								height={25}
								alt="logo"
							/>
						</a>
					</li>
					<li>
						<a href="spotify.com">
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
