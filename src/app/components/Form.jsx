"use client";

import handleForm from "../utils/actions/handleform";

export default function customerForm() {
	return (
		<form action={handleForm}>
			<div>
				<label className="label" htmlFor="firstname">
					Fornavn *
				</label>
				<input
					className="input"
					type="text"
					name="firstname"
					id="firstname"
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
					required
				/>
			</div>
			<div>
				<label className="label" htmlFor="date">
					Dato *
				</label>
				<input className="input" type="date" name="date" id="date" />
			</div>
			<input className="button" type="submit" value="Send" />
		</form>
	);
}
