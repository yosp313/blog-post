import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import AuthButton from "../components/AuthButton";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: blogs } = await supabase.from("blogs").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthButton />
      <h1 className="text-5xl font-bold">Hello, World!</h1>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
    </main>
  );
}
