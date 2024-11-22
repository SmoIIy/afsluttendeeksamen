import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import SignIn from 'src/app/admin/components/Auth/SignIn';

export default async function SignInPage() {
  const supabase = await createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/admin');
  }

  return <SignIn />;
}
