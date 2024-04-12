"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthButtonClient from "@/components/AuthButtonClient";

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: user } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Welcome to the family of Y!</h1>
      <AuthButtonClient user={user} />
    </div>
  );
}
