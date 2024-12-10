"use client";

import { supabase } from "src/app/utils/supabase/settings";
import { useState } from "react";

export default function NewDate({ data }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className="flex flex-col w-96 gap-4 p-4 bg-gradient-to-r from-dark-600 to bg-dark-400 rounded-lg items-start">
			<button
				onClick={openModal}
				type="button"
				className="self-end absolute"
			>
				<svg
					className="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					viewBox="0 0 16 3"
				>
					<path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
				</svg>
			</button>
			<p className="sr-only">ID: {data.id}</p>
			<p className="text-2xl">Ønsket Dato: {data.date}</p>
			<p className="text-base">
				Navn: {data.firstname} {data.lastname}
			</p>
			<div className="flex flex-col items-start *:text-base">
				<p>Email: {data.email}</p>
				<p>Telefon: {data.phone}</p>
			</div>
			<div className="min-h-32 w-full flex flex-col items-start *:text-dark-800 p-4 rounded-md bg-cream-50">
				<p>Noter: </p>
				<p className="  text-sm">{data.message}</p>
			</div>

			{isOpen && (
				<div className="flex flex-col *:w-full gap-2 p-4 justify-around absolute w-72 bg-cream-50 rounded-lg">
					{/* <span
						className="h-4 w-12 bg-cream-50 absolute top-0 left-10"
						style={{
							clipPath:
								"polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
						}}
					></span> */}

					<span className="h-4 w-12 bg-cream-50 absolute top-0 rounded-l-full after:content-[''] after:absolute after:-right-2 after:top-0 after:w-4 after:h-4 after:bg-cream-50 after:rounded-full"></span>

					<button
						className="button-primary"
						type="button"
						onClick={() => moveItem(data, data.id)}
					>
						Flyt
					</button>
					<button
						type="button"
						className="button-secondary bg-utility-warning border-utility-warning text-cream-50 hover:text-cream-50 hover:border-utility-warninghover hover:bg-utility-warninghover"
						onClick={() => deleteItem(data.id)}
					>
						Slet
					</button>
				</div>
			)}
		</div>
	);
}

async function moveItem(date, dateId) {
	const { data, insertError } = await supabase
		.from("deleted")
		.insert(date)
		.select();
	if (data) {
		console.log("inserted ", data);
	}
	if (insertError) {
		console.log("Error with insert: ", insertError);
	}
	const { error } = await supabase.from("test").delete().eq("id", dateId);
	if (error) {
		console.log(error);
	}
}

async function deleteItem(dateId) {
	const { error } = await supabase.from("deleted").delete().eq("id", dateId);
	if (error) {
		console.log(error);
	}
}
