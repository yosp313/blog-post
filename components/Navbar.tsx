import AuthButtonServer from "./AuthButtonServer";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import plus from "../public/plus.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", String(user?.id));

  return (
    <nav className="flex justify-evenly items-center gap-16 border-b-slate-200 border-b-2">
      {profiles?.map((profile) => (
        <Avatar key={profile.id}>
          <AvatarImage
            className="m-auto"
            src={String(profile.avatar_url)}
            alt="profile picture of the user"
          />
          <AvatarFallback>{profile.full_name}</AvatarFallback>
        </Avatar>
      ))}
      <Link href={"/blogs"}>
        <Button>
          <Image src={plus} alt="A button for adding new blogs" />
        </Button>
      </Link>
      <AuthButtonServer />
    </nav>
  );
}
