"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "./ui/button";

export default function AuthButton() {
  const supabase = createClientComponentClient();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div className="flex gap-16 my-12">
      <Button onClick={handleSignIn}>Sign In</Button>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}
