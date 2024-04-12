"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AuthButtonServer from "@/components/AuthButtonServer";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: blogs } = await supabase.from("blogs").select("*");

  const { data: user } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthButtonServer />
      <h1 className="text-5xl font-bold">Hello, World!</h1>
      <Card className="my-10">
        <CardHeader>
          <CardTitle>Blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(blogs, null, 2)}</pre>
        </CardContent>
      </Card>
    </main>
  );
}
