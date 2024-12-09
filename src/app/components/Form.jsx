"use client";

import handleForm from "../utils/actions/handleform";

export default function customerForm() {
	return (
		<form
			action={handleForm}
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
				/>
			</div>
			<div>
				<label className="label" htmlFor="phone">
					Phone *
				</label>
				<input
					className="input"
					type="tel"
					name="phone"
					id="phone"
					placeholder="8888 8888"
					required
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
				/>
			</div>
			<div>
				<label className="label" htmlFor="date">
					Dato *
				</label>
				<input className="input" type="date" name="date" id="date" />
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
