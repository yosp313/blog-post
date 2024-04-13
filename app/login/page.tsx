"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import AuthButtonClient from "@/components/AuthButtonClient";
import { HeroHighlightDemo } from "@/components/HighlightHero";

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <HeroHighlightDemo />
      <AuthButtonClient user={user} />
    </div>
  );
}
