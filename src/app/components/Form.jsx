"use client";

import handleForm from "../utils/actions/handleform";

export default function customerForm() {
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
				"Venligst indtast et 8-cifret telefonnummer.",
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
			handleForm(event);
		}
	};

	return (
		<form
			action={handleSubmit}
			className="grid grid-cols-1 mx-auto gap-6 mb-6 md:grid-cols-2 max-w-3xl"
		>
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
					onInput={handleInputChange}
				/>
			</div>
			<div className="md:col-span-2">
				<label className="label" htmlFor="comment">
					Kommentar
				</label>
				<textarea
					className="textarea"
					type="textarea"
					name="comment"
					id="comment"
					placeholder="Skriv yderligere noter.."
					onInput={handleInputChange}
				/>
			</div>
			<input
				className="button-primary md:col-span-2"
				type="submit"
				value="Send"
			/>
		</form>
	);
}
