'use client';

import { createClient } from '@supabase/supabase-js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Form() {
  const supabase = createClient();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      date: Yup.date('Venligst vælg dato').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label className="label" htmlFor="firstName">
        First Name
      </label>
      <input
        className="input"
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="label">{formik.errors.firstName}</div>
      ) : null}

      <label className="label" htmlFor="lastName">
        Last Name
      </label>
      <input
        className="input"
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="label">{formik.errors.lastName}</div>
      ) : null}

      <label className="label" htmlFor="email">
        Email Address
      </label>
      <input
        className="input"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="label">{formik.errors.email}</div>
      ) : null}
      <label className="label" htmlFor="date">
        Date
      </label>
      <input
        className="input"
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.date}
      />
      {formik.touched.date && formik.errors.date ? (
        <div className="label">{formik.errors.date}</div>
      ) : null}

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
