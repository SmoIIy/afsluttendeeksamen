"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import Button from "./Button";
import BurgerMenu from "./Mobilemenu";

export default function Header() {
	return (
		<header>
			<div className="hidden md:flex h-32 max-w-7xl mx-auto text-xl justify-start  items-center text-cream-200 gap-8">
				<Link href="/">
					<Image src={logo} alt="logo" height={60} />
				</Link>
				<Link className="relative group" href="/">
					Forside
					<span className="hover-underline" />
				</Link>
				<Link className="relative group" href="/om">
					Om Per
					<span className="hover-underline" />
				</Link>
				<Link className="relative group" href="/kontakt">
					Kontakt
					<span className="hover-underline" />
				</Link>
				<Button
					anchor="/booking"
					body="Booking"
					className="button-primary ml-auto"
				/>
			</div>
			<BurgerMenu />
		</header>
	);
}
