"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AuthButtonServer from "@/components/AuthButtonServer";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: blogs } = await supabase.from("blogs").select("*");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthButtonServer />
      <h1 className="text-5xl font-bold">Hello, World to Y!</h1>
      {blogs?.map((blog) => (
        <Card className="my-10" key={blog.id}>
          <CardHeader>
            <CardTitle>
              <span className="mr-auto text-slate-500 m-9">{user?.email}</span>
              <div className="flex justify-center">
                <span className="text-xl">{blog.title}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>{blog.content}</CardContent>
        </Card>
      ))}
    </main>
  );
}
