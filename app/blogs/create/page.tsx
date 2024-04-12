import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import React from "react";

export default function BlogForm() {
  const addBlog = async (formData: FormData) => {
    "use server";
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));
    const supabase = createServerActionClient<Database>({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase
        .from("blogs")
        .insert({ title, content, author_id: user.id });
    }
  };

  return (
    <form action={addBlog}>
      <Label>Title</Label>
      <Input placeholder="awesome title" name="title" />
      <Label>Content</Label>
      <Input placeholder="awesome sauce" name="content" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
