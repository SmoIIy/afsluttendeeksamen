"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
});

const ResetPassword = () => {
	const supabase = createClientComponentClient();
	const [errorMsg, setErrorMsg] = useState(null);
	const [successMsg, setSuccessMsg] = useState(null);

	async function resetPassword(formData) {
		const { error } = await supabase.auth.resetPasswordForEmail(
			formData.email,
			{
				redirectTo: `${window.location.origin}/auth/update-password`,
			},
		);

		if (error) {
			setErrorMsg(error.message);
		} else {
			setSuccessMsg("Password reset instructions sent.");
		}
	}

	return (
		<div className="card bg-dark-700 max-w-96 mx-auto mt-16">
			<h2 className="w-full text-center text-3xl">Glemt Password</h2>
			<Formik
				initialValues={{
					email: "",
				}}
				validationSchema={ResetPasswordSchema}
				onSubmit={resetPassword}
			>
				{({ errors, touched }) => (
					<Form className="column w-full">
						<label className="label" htmlFor="email">
							Email
						</label>
						<Field
							className={cn("input", errors.email && "bg-red-50")}
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
						<button
							className="button-secondary w-full"
							type="submit"
						>
							Send Instrukser
						</button>
					</Form>
				)}
			</Formik>
			{errorMsg && (
				<div className="text-utility-warning text-center">
					{errorMsg}
				</div>
			)}
			{successMsg && (
				<div className="text-dark-800 text-center">{successMsg}</div>
			)}
			<Link href="/admin/sign-in" className="link">
				Tilbage til login
			</Link>
		</div>
	);
};

export default ResetPassword;
