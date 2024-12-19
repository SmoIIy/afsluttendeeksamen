"use client";

import { supabase } from "src/app/utils/supabase/settings";
import { useState } from "react";
import { formatDateBack } from "src/app/utils/actions/formatdate";

export default function NewDate({ data }) {
	const [isOpen, setIsOpen] = useState(false);
	const [confirmAction, setConfirmAction] = useState(null);

	const openModal = () => {
		setIsOpen((prevState) => !prevState);
	};
	// Reset the action after execution
	const handleConfirm = async () => {
		if (confirmAction) {
			await confirmAction();
		}
		setConfirmAction(null);
	};
	// Cancel confirmation
	const cancelConfirm = () => {
		setIsOpen(false);
		setConfirmAction(null);
	};

	return (
		<div className="flex flex-col w-96 p-4 bg-gradient-to-r from-dark-700 to bg-dark-500 rounded-lg items-start shadow border border-utility-notice">
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
			<p className="text-base">
				{data.firstname} {data.lastname}
			</p>
			<p className="text-2xl font-bold">Dato: {data.date}</p>

			<div className="flex flex-col items-start *:text-base *:font-extralight my-4">
				<p>{data.email}</p>
				<p>{data.phone}</p>
				<p className="italic">{data.event}</p>
			</div>
			<div className="min-h-32 w-full flex flex-col items-start   ">
				<p className="text-cream-50 mb-1">Kommentar: </p>
				<p className="bg-cream-50 min-h-32  w-full p-4 rounded-md text-sm text-dark-800 italic">
					"{data.message}"
				</p>
			</div>

			{isOpen && (
				<div className="flex flex-col *:w-full gap-2 p-4 justify-around absolute w-72 bg-cream-50 rounded-lg">
					<span className="h-4 w-12 bg-cream-50 absolute top-0 rounded-l-full after:content-[''] after:absolute after:-right-2 after:top-0 after:w-4 after:h-4 after:bg-cream-50 after:rounded-full"></span>

					<button
						className="button-primary"
						type="button"
						onClick={() =>
							setConfirmAction(
								() => () => moveItem(data, data.id),
							)
						}
					>
						Bekræft
					</button>
					<button
						type="button"
						className="button-secondary button-color-delete"
						onClick={() =>
							setConfirmAction(() => () => deleteItem(data.id))
						}
					>
						Slet
					</button>
				</div>
			)}

			{confirmAction && (
				<div className="fixed inset-0 flex items-center justify-center bg-dark-500 bg-opacity-50">
					<div className="bg-cream-50 p-4 rounded-lg shadow-lg text-center ">
						<p className="mb-4 text-dark-800">Venligst bekræft</p>
						<div className="flex gap-4 justify-end">
							<button
								onClick={handleConfirm}
								className="button-primary"
							>
								Udfør
							</button>
							<button
								onClick={cancelConfirm}
								className="button-secondary button-color-delete"
							>
								Fortryd
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

async function moveItem(date, dateId) {
	if (date.date) {
		try {
			date.date = formatDateBack(date.date);
		} catch (error) {
			console.error(error.message);
			return;
		}
	} else {
		console.warn("No date provided to format.");
	}

	const { data, insertError } = await supabase
		.from("confirmed")
		.insert(date)
		.select();

	const { error } = await supabase.from("new").delete().eq("id", dateId);
}

async function deleteItem(dateId) {
	const { error } = await supabase.from("new").delete().eq("id", dateId);
}
