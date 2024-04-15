"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function HomePage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: blogs } = await supabase.from("blogs").select("*");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center mt-10">
      <h1 className="text-5xl font-bold">Hello, World to Y!</h1>
      {blogs?.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.id}`}>
          <Card className="my-6 max-w-4xl">
            <CardHeader>
              <CardTitle>
                <div className="text-slate-500 text-xs mb-10">
                  {user?.email}
                </div>
                <div className="flex justify-center">
                  <span className="text-xl">{blog.title}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-wrap">{blog.content}</CardContent>
          </Card>
        </Link>
      ))}
    </main>
  );
}
