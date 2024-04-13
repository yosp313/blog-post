"use server";

import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  //check if the user is signed in or not if not redirect to login route
  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
