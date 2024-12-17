"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsOpen(false),
		);
	}, []);

	return (
		<div className="relative md:hidden">
			<div
				className={`flex p-4 w-full justify-between duration-300 transition-colors items-center     ${
					isOpen ? "bg-dark-500" : " bg-transparent"
				}`}
			>
				<Link href="/">
					<img src="/mobillogo.png" alt="" />
				</Link>
				{/* Burger Button */}
				<button
					type="button"
					onClick={toggleMenu}
					className="flex flex-col items-center justify-center w-14 h-12 space-y-1 rounded  text-cream-50"
				>
					<span className="sr-only">Åben Menu</span>
					<span
						className={`h-1 w-10 bg-cream-400 transition-transform duration-300 ${
							isOpen ? "rotate-45 translate-y-2" : ""
						}`}
					/>
					<span
						className={`h-1 ml-1 w-10 bg-cream-400 transition-opacity duration-300 ${
							isOpen ? "opacity-0" : "opacity-100"
						}`}
					/>
					<span
						className={`h-1 w-10 bg-cream-400 transition-transform duration-300 ${
							isOpen ? " -rotate-45 -translate-y-2" : ""
						}`}
					/>
				</button>
			</div>

			{/* Menu */}
			<div
				className={`absolute top-24 right-0 bg-dark-500 text-cream-50 w-full p-4 rounded shadow-lg transition-transform duration-300 ${
					isOpen ? "scale-100" : " scale-0"
				}`}
			>
				<ul className="space-y-2 flex flex-col gap-4 items-center ">
					<li>
						<h2 className="font-syne">Menu</h2>
					</li>
					<li>
						<Link href="/" className="hover:underline">
							Forside
						</Link>
					</li>
					<li>
						<Link href="/om" className="hover:underline">
							Om Per
						</Link>
					</li>
					<li>
						<Link href="/kontakt" className="hover:underline">
							Kontakt
						</Link>
					</li>
					<li>
						<Link href="/booking" className="hover:underline">
							Book
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BurgerMenu;
