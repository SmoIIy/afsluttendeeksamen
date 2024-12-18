"use client";

import handleForm from "../utils/actions/handleform";
import { useState } from "react";

export default function customerForm() {
	const [submitted, setSubmitted] = useState(false);
	const validatePhoneNumber = (value) => {
		const phoneRegex = /^\d{8}$/;
		return phoneRegex.test(value);
	};

	const validateEmail = (value) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};

	const handleInputChange = (event) => {
		const input = event.target;
		if (input.name === "phone" && !validatePhoneNumber(input.value)) {
			input.setCustomValidity(
				"Venligst indtast et 8-cifret telefonnummer, uden mellemrum",
			);
		} else if (input.name === "phone") {
			input.setCustomValidity("");
		}

		if (input.name === "email" && !validateEmail(input.value)) {
			input.setCustomValidity(
				"Venligst indtast en korrekt emailaddresse",
			);
		} else if (input.name === "email") {
			input.setCustomValidity("");
		}

		input.reportValidity();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		if (form.checkValidity()) {
			const formData = new FormData(form);
			const serializedData = Object.fromEntries(formData.entries());
			console.log(serializedData);
			handleForm(serializedData);
			setSubmitted(true);
		}
	};
	const today = new Date().toISOString().split("T")[0];
	if (submitted) {
		return (
			<div className="grid grid-cols-1 mx-auto max-w-3xl place-content-center text-center text-green-500 md:min-h-[800px]">
				<h4>Tak for din besked! Du hører fra mig snarest!</h4>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="grid grid-cols-1 mx-auto gap-6 mb-6 md:grid-cols-2 max-w-3xl"
		>
			<p className="text-xl text-cream-200 md:col-span-2">
				Fortæl mig om dit event ved at udfylde formularen herunder.
			</p>
			<div>
				<label className="label" htmlFor="firstname">
					Fornavn *
				</label>
				<input
					className="input"
					type="text"
					name="firstname"
					id="firstname"
					placeholder="Navn"
					required
					onInput={handleInputChange}
				/>
			</div>
			<div>
				<label className="label" htmlFor="lastname">
					Efternavn *
				</label>
				<input
					className="input"
					type="text"
					name="lastname"
					id="lastname"
					placeholder="Navnesen"
					required
					onInput={handleInputChange}
				/>
			</div>
			<div>
				<label className="label" htmlFor="event">
					Event *
				</label>
				<input
					className="input"
					type="text"
					name="event"
					id="event"
					placeholder="Hvilket event skal du holde?"
					required
					onInput={handleInputChange}
				/>
			</div>
			<div>
				<label className="label" htmlFor="phone">
					Telefonnummer *
				</label>
				<input
					className="input"
					type="tel"
					name="phone"
					id="phone"
					placeholder="88888888"
					required
					onInput={handleInputChange}
				/>
			</div>
			<div>
				<label className="label" htmlFor="email">
					Email *
				</label>
				<input
					className="input"
					type="email"
					name="email"
					id="email"
					placeholder="email@email.com"
					required
					onInput={handleInputChange}
				/>
			</div>
			<div>
				<label className="label" htmlFor="date">
					Dato *
				</label>
				<input
					className="input"
					type="date"
					name="date"
					id="date"
					min={today}
					onInput={handleInputChange}
				/>
			</div>
			<div className="md:col-span-2">
				<label className="label" htmlFor="message">
					Kommentar
				</label>
				<textarea
					className="textarea"
					type="textarea"
					name="message"
					id="message"
					placeholder="Skriv yderligere noter.."
					onInput={handleInputChange}
				/>
			</div>
			<div className="flex items-center mb-4 md:col-span-2">
				<input
					id="default-checkbox"
					type="checkbox"
					value=""
					className="w-4 h-4 text-green-400 bg-dark-100 border-dark-100 rounded focus:ring-blue-500"
					required
				/>
				<label htmlFor="default-checkbox" className="ms-2 label mb-0">
					Bekræft at jeg gerne må kontakte dig på den angivede mail på
					det angivede telefonnummer *
				</label>
			</div>
			<input
				className="button-primary md:col-span-2 md:mx-52"
				type="submit"
				value="Send"
			/>
		</form>
	);
}
