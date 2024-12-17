"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().required("Required"),
});

const SignIn = () => {
	const supabase = createClientComponentClient();
	const [errorMsg, setErrorMsg] = useState(null);

	async function signIn(formData) {
		const { error } = await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		});

		if (error) {
			setErrorMsg(error.message);
		}
	}

	return (
		<div className="card bg-dark-700 max-w-96 mx-auto mt-16">
			<h2 className="text-cream-50 w-full text-center text-4xl mx-auto">
				Log In
			</h2>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={SignInSchema}
				onSubmit={signIn}
			>
				{({ errors, touched }) => (
					<Form className="column w-full">
						<label className="text-cream-50" htmlFor="email">
							Email
						</label>
						<Field
							className={cn(
								"input",
								errors.email &&
									touched.email &&
									"bg-text-utility-warning",
							)}
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>
						{errors.email && touched.email ? (
							<div className="text-utility-warning">
								{errors.email}
							</div>
						) : null}

						<label className="text-cream-50" htmlFor="email">
							Password
						</label>
						<Field
							className={cn(
								"input",
								errors.password &&
									touched.password &&
									"bg-text-utility-warning",
							)}
							id="password"
							name="password"
							type="password"
							placeholder="********"
						/>
						{errors.password && touched.password ? (
							<div className="text-utility-warning">
								{errors.password}
							</div>
						) : null}

						<Link
							href="/admin/reset-password"
							className="link w-full"
						>
							Glemt adgangskode?
						</Link>

						<button className="button-primary w-full" type="submit">
							Login
						</button>
					</Form>
				)}
			</Formik>
			{errorMsg && <div className="text-utility-warning">{errorMsg}</div>}
		</div>
	);
};

export default SignIn;
