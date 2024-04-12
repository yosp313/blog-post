"use client";

import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import github from "../public/github.svg";

export default function AuthButtonClient({
  user,
}: {
  readonly user: User | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });

    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex gap-16 my-12">
      {user ? (
        <Button onClick={handleSignOut}>Sign Out</Button>
      ) : (
        <Button onClick={handleSignIn}>
          <Image src={github} alt="github logo" className="mr-3" />
          <h3 className="font-bold text-lg">Sign In</h3>
        </Button>
      )}
    </div>
  );
}
