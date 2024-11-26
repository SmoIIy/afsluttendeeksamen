import { supabase } from "../utils/supabase/settings";

async function handleForm(formdata) {
	"use server";

	const formData = [
		{
			date: "2017-06-01",
			firstname: "Janus",
			lastname: "Bardrum",
			email: "test@test.dk",
		},
	];

	const { data, error } = await supabase
		.from("test")
		.insert(formData)
		.select();

	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
}

export default async function customerForm() {
	return (
		<form action={handleForm}>
			<div>
				<label className="label" htmlFor="firstname">
					Fornavn
				</label>
				<input
					className="input"
					type="text"
					name="firstname"
					id="firstname"
				/>
			</div>
			<div>
				<label className="label" htmlFor="lastname">
					Efternavn
				</label>
				<input
					className="input"
					type="text"
					name="lastname"
					id="lastname"
				/>
			</div>
			<div>
				<label className="label" htmlFor="email">
					Email
				</label>
				<input className="input" type="email" name="email" id="email" />
			</div>
			<div>
				<label className="label" htmlFor="date">
					Dato
				</label>
				<input className="input" type="date" name="date" id="date" />
			</div>
			<input className="button" type="submit" value="Send" />
		</form>
	);
}
