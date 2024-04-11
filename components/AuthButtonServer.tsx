import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import AuthButtonClient from "./AuthButtonClient";

export default async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AuthButtonClient user={user} />;
}
