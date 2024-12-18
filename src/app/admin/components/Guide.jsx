"use client";

import { useState } from "react";

export default function Guide({ body }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<div className="absolute z-50">
			<button
				type="button"
				onClick={openModal}
				className="fixed bottom-10 right-10 text-blue-400 text-2xl border-blue-400  border-2 rounded-full p-6 px-8 hover:bg-blue-400 hover:text-cream-50 transition-colors "
			>
				?
			</button>
			{isOpen && (
				<div className="md:col-span-2 max-w-96 fixed top-12 left-0 p-4 flex flex-col w-full md:p-6 md:bottom-36 md:right-10 md:left-auto items-center justify-center bg-dark-500 bg-opacity-190 md:bg-opacity-80 md:border border-cream-50 rounded-3xl">
					<h2>Guide!</h2>
					<p>{body}</p>
				</div>
			)}
		</div>
	);
}
