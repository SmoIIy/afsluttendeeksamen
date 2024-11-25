'use client';

import { Field, Form, Formik } from 'formik';

import { supabase } from '../utils/supabase/settings';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function handleForm(value) {
  alert(JSON.stringify(value, null, 2));

  const { data, error } = await supabase
    .from('test')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
    .select();
}

export default function customerForm() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await sleep(500);
          handleForm(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
