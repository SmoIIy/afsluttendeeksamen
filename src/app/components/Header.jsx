"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import Button from "./Button";

export default function Header() {
	// const [openNav, setOpenNav] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener(
	// 		"resize",
	// 		() => window.innerWidth >= 960 && setOpenNav(false),
	// 	);
	// }, []);

	return (
		<header className="h-32 max-w-7xl mx-auto text-xl justify-start flex items-center text-cream-200 gap-8">
			<Link href="/">
				<Image src={logo} alt="logo" height={60} />
			</Link>
			<Link href="/">Forside</Link>
			<Link href="/om">Om Per</Link>
			<Link href="/kontakt">Kontakt</Link>
			<Button
				anchor="/booking"
				body="Booking"
				className="button-primary ml-auto"
			/>
		</header>
	);
}
