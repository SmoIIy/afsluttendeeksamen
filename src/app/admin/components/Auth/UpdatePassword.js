"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const UpdatePasswordSchema = Yup.object().shape({
	password: Yup.string().required("Required"),
});

const UpdatePassword = () => {
	const supabase = createClientComponentClient();
	const router = useRouter();
	const [errorMsg, setErrorMsg] = useState(null);

	async function updatePassword(formData) {
		const { error } = await supabase.auth.updateUser({
			password: formData.password,
		});

		if (error) {
			setErrorMsg(error.message);
		} else {
			// Go to Home page
			router.replace("/admin");
		}
	}

	return (
		<div className="card bg-dark-700 max-w-96 mx-auto mt-16">
			<h2 className="w-full text-center text-3xl">Update Password</h2>
			<Formik
				initialValues={{
					password: "",
				}}
				validationSchema={UpdatePasswordSchema}
				onSubmit={updatePassword}
			>
				{({ errors, touched }) => (
					<Form className="column w-full">
						<label htmlFor="email" className="label">
							New Password
						</label>
						<Field
							className={cn(
								"input",
								errors.password &&
									touched.password &&
									"bg-red-50",
							)}
							id="password"
							name="password"
							type="password"
						/>
						{errors.password && touched.password ? (
							<div className="text-utility-warning">
								{errors.password}
							</div>
						) : null}
						<button className="button-primary w-full" type="submit">
							Update Password
						</button>
					</Form>
				)}
			</Formik>
			{errorMsg && <div className="text-utility-warning">{errorMsg}</div>}
		</div>
	);
};

export default UpdatePassword;
